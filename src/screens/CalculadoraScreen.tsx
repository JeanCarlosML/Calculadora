import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/userCalculadora';

export const CalculadoraScreen = () => {
  const {
    armarNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    eliminarUltimoNumero,
    limpiar,
    numero,
    numeroAnterior,
    positivoNegativo,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          color="#9B9B9B"
          colorLetra="black"
          accion={limpiar}
        />
        <BotonCalc
          texto="+/-"
          color="#9B9B9B"
          colorLetra="black"
          accion={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          color="#9B9B9B"
          colorLetra="black"
          accion={eliminarUltimoNumero}
        />
        <BotonCalc
          texto="/"
          color="#FF9427"
          colorLetra="white"
          accion={btnDividir}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc
          texto="x"
          color="#FF9427"
          colorLetra="white"
          accion={btnMultiplicar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc
          texto="-"
          color="#FF9427"
          colorLetra="white"
          accion={btnRestar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc
          texto="+"
          color="#FF9427"
          colorLetra="white"
          accion={btnSumar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc
          texto="="
          color="#FF9427"
          colorLetra="white"
          accion={calcular}
        />
      </View>
    </View>
  );
};
