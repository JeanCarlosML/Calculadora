import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    paddingHorizontal: 10,
  },
  resultadoPequeno: {
    fontSize: 30,
    textAlign: 'right',
    paddingHorizontal: 10,
    color: 'gray',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  boton: {
    height: 60,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
});
