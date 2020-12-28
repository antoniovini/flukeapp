import React, {useRef, useState, useEffect} from 'react';
import {Linking, ScrollView, Dimensions} from 'react-native';
import {ActivityIndicator, Appbar as AppbarPaper, useTheme} from 'react-native-paper';

import Appbar from '../../components/Appbar';
import Logo from '../../components/Logo';
import MenuItem from '../../components/MenuItem';
import ScrollableMenu from '../../components/ScrollableMenu';
import Card from '../../components/Card';

import { fetchConsumption } from '../../services/consumption';
import { fetchPackage } from '../../services/package';

import {
  Container, 
  Title, 
  Text,
  Normal,
  CenterContainer,
  InlineView,
  FullContainer,
  MinutesContainer,
  LoadingContainer
} from './styles';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

const width = Math.floor(Dimensions.get('window').width);

const Home = () => {
  const { colors } = useTheme();

  const [selected, setSelected] = useState(0);
  const [consumption, setConsumption] = useState({});
  const [plan, setPlan] = useState({});
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    // dates this month
    const today = new Date('2020-08-21');
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    
    // fetch consumption by current month
    fetchConsumption(firstDay, today)
    .then(res => {
      // calculate voice use in this month
      const voice = res.reduce((prev, curr) => prev + curr.voice, 0);
      setConsumption({ voice });

      // fetch package info
      return fetchPackage();
    })
    .then(res => {
      // calculate total of plan
      const total = (res.subscription + res.topup + res.bonus);

      // calculate the percentage based in available
      const percentage = Math.ceil((1 - (res.available / total)) * 100);

      setPlan({ percentage, ...res });

      // set loading state to false
      setLoading(false);
    })
    .catch(e => console.log(e));
  }, []);

  const open = (id) => {
    // scroll the scrollview
    scrollRef.current.scrollTo({ x: width * id, y: 0, animated: true });
    // and set the selected
    setSelected(id);
  }

  const handleScroll = (event) => {
    // get position of the scroll event
    const position = Math.floor(event.nativeEvent.contentOffset.x);
    // get the id based in this position
    const id = Math.ceil(position / width);
    setSelected(id);
  }

  return (
    <Container colors={colors}>
      <Appbar>
        <Logo />
        <AppbarPaper.Action
          color="#bdc3c7"
          icon="help"
          onPress={() =>
            Linking.openURL('https://flu.ke/atendimento').catch((err) =>
              console.error("Couldn't load page", err),
            )
          }
        />
      </Appbar>
      <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
      >
        <ScrollableMenu selected={selected}>
          <MenuItem
            text="meus dados"
            selected={selected === 0}
            onPress={() => open(0)}
          />
          <MenuItem
            text="meus minutos"
            selected={selected === 1}
            onPress={() => open(1)}
          />
        </ScrollableMenu>
        <ScrollView
          horizontal
          ref={scrollRef}
          disableIntervalMomentum={true}
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          style={{marginTop: 10}}
        >
          <FullContainer>
            { loading ? (
              <LoadingContainer>
                <ActivityIndicator
                  size={'large'}
                  color="black"
                />
              </LoadingContainer>
            ) : (
              <Card>
                <AnimatedCircularProgress
                  size={180}
                  width={6}
                  fill={plan.percentage || 0}
                  rotation={0}
                  tintColor="#ffffff"
                  backgroundColor="#3d5875">
                  {(fill) => (
                    <>
                      <InlineView>
                        <Title>{(plan.available * 0.001).toFixed(1)}</Title>
                        <Normal
                          style={{paddingBottom: 12}}
                        >gb</Normal>
                      </InlineView>
                      <Text>disponíveis</Text>
                    </>
                  )}
                </AnimatedCircularProgress>
                <CenterContainer>
                  <Text>de {(plan.subscription + plan.topup + plan.bonus) * 0.001}gb</Text>
                </CenterContainer>
              </Card>
            )}
          </FullContainer>
          <FullContainer>
            { loading ? (
              <LoadingContainer>
                <ActivityIndicator
                  size={'large'}
                  color="black"
                />
              </LoadingContainer>
            ): (
              <Card>
                <MinutesContainer>
                  <InlineView>
                    <Title>{consumption.voice}</Title>
                    <Normal
                      style={{paddingBottom: 12}}
                    >min</Normal>
                  </InlineView>
                  <Text>utilizados este mês</Text>
                </MinutesContainer>
              </Card>
            )}
          </FullContainer>
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Home;
