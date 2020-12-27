import React, {useEffect, useState} from 'react';

import {Linking} from 'react-native';
import {Text} from 'react-native-svg';
import * as scale from 'd3-scale';
import {BarChart, XAxis} from 'react-native-svg-charts';
import {
  ActivityIndicator,
  useTheme,
  Appbar as AppbarPaper,
} from 'react-native-paper';

import Appbar from '../../components/Appbar';
import TabMenu from '../../components/TabMenu';
import Paginator from '../../components/Paginator';

import {fetchConsumption} from '../../services/consumption';
import {Container, Content, ChartContainer, LoadingContainer} from './styles';

const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const Historic = () => {
  const [consumption, setConsumption] = useState({voices: []});
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);

  const {colors} = useTheme();

  useEffect(() => {
    // date represents today
    const today = new Date('2020-08-21');
    setDate(today);
  }, []);

  useEffect(() => {
    if (date) {
      // start the loading
      setLoading(true);

      // get the date of one week ago
      const oneWeekAgo = new Date(date - 6 * 24 * 60 * 60 * 1000);

      // fetch the user consumption
      fetchConsumption(oneWeekAgo, date)
        .then((res) => {
          // create the data to place in chart
          const voices = res.map((item) => {
            const itemDate = new Date(item.date);
            const day = days[itemDate.getDay()];
            return {value: item.voice, label: `${itemDate.getDate()}. ${day}`};
          });
          // create the data to place in chart
          const data = res.map((item) => {
            const itemDate = new Date(item.date);
            const day = days[itemDate.getDay()];
            return {
              value: item.data / Math.pow(1024, 2),
              label: `${itemDate.getDate()}. ${day}`,
            };
          });

          // set the data state
          setConsumption({voices, data});
          // stop the loading
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [date]);

  // format the charts labels
  const Labels = ({x, y, bandwidth, data}) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={value < getCutOff() ? y(value) - 10 : y(value) + 15}
        fontSize={14}
        fill={'black'}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {value}
      </Text>
    ));

  // create the cut off limiar to put label inside or outside the
  // chart bar
  const getCutOff = () => {
    let cutoff = 0;

    if (selected === 0) {
      const values = consumption.data.map((item) => item.value);
      cutoff = values.reduce((prev, curr) => (prev < curr ? curr : prev), 0);
    } else {
      const values = consumption.voices.map((item) => item.value);
      cutoff = values.reduce((prev, curr) => (prev < curr ? curr : prev), 0);
    }

    return cutoff / 2 > 40 ? cutoff : cutoff / 2;
  };

  return (
    <Container>
      <Appbar>
        <AppbarPaper.Content
          title="Consumo de dados"
          titleStyle={{fontFamily: 'Quicksand-Bold'}}
        />
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
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size={'large'} color="black" />
        </LoadingContainer>
      ) : (
        <Content>
          <TabMenu
            tabs={['DADOS (mb)', 'MINUTOS']}
            selected={selected}
            onSelect={setSelected}>
            <>
              <ChartContainer>
                <BarChart
                  style={{flex: 1}}
                  data={consumption.data.map((item) => item.value)}
                  svg={{fill: colors.accent, rx: 20}}
                  contentInsets={{left: 10, right: 10, top: 10, bottom: 10}}
                  gridMin={0}
                  spacing={0.2}>
                  <Labels />
                </BarChart>
                <XAxis
                  style={{marginTop: 10}}
                  data={consumption.data}
                  formatLabel={(_, index) => consumption.data[index].label}
                  contentInsets={{left: 10, right: 10}}
                  svg={{fontSize: 12, fill: 'black', fontWeight: 'bold'}}
                  scale={scale.scaleBand}
                />
              </ChartContainer>
              <Paginator
                style={{marginTop: 20}}
                text={'Este mês'}
                onNext={() => {
                  if (date.getTime() <= new Date('2020-08-21').getTime()) {
                    const copiedDate = new Date(date.getTime());
                    copiedDate.setDate(copiedDate.getDate() + 1);
                    setDate(copiedDate);
                    setLoading(true);
                  }
                }}
                onBack={() => {
                  if (date.getTime() > new Date('2020-08-01').getTime()) {
                    const copiedDate = new Date(date.getTime());
                    copiedDate.setDate(copiedDate.getDate() - 1);
                    setDate(copiedDate);
                    setLoading(true);
                  }
                }}
              />
            </>
            <>
              <ChartContainer>
                <BarChart
                  style={{flex: 1}}
                  data={consumption.voices.map((voice) => voice.value)}
                  svg={{fill: colors.accent, rx: 20}}
                  contentInsets={{left: 10, right: 10, top: 10, bottom: 10}}
                  gridMin={0}
                  spacing={0.2}>
                  <Labels />
                </BarChart>
                <XAxis
                  style={{marginTop: 10}}
                  data={consumption.voices}
                  formatLabel={(_, index) => consumption.voices[index].label}
                  contentInsets={{left: 10, right: 10}}
                  svg={{fontSize: 12, fill: 'black', fontWeight: 'bold'}}
                  scale={scale.scaleBand}
                />
              </ChartContainer>
              <Paginator
                style={{marginTop: 20}}
                text={'Este mês'}
                onNext={() => {
                  if (date.getTime() <= new Date('2020-08-21').getTime()) {
                    const copiedDate = new Date(date.getTime());
                    copiedDate.setDate(copiedDate.getDate() + 1);
                    setDate(copiedDate);
                    setLoading(true);
                  }
                }}
                onBack={() => {
                  if (date.getTime() > new Date('2020-08-01').getTime()) {
                    const copiedDate = new Date(date.getTime());
                    copiedDate.setDate(copiedDate.getDate() - 1);
                    setDate(copiedDate);
                    setLoading(true);
                  }
                }}
              />
            </>
          </TabMenu>
        </Content>
      )}
    </Container>
  );
};

export default Historic;
