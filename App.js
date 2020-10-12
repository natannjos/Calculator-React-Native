import React, {useState, Component} from 'react';
import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';

// components
import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component{

  state = {
    displayValue: '0',
    operacao: '',
    p1: 0,
    p2: 0,
    ultimoResultado: 0
  }

  addDigito = n => {

    let newNumber = this.state.displayValue

    newNumber += n

    // exclui o 0 inicial no primeiro dígito  
    if (newNumber.startsWith('0')) newNumber = newNumber.slice(1)


    this.setState({displayValue: newNumber})
  }

  clear = () => {
    this.setState({displayValue: '0', operacao: '', p1:0, p2:0, ultimoResultado: 0})
  }

  setOperation = operacao => {

  }

  calcula = () =>{

  }


  render(){

    return (
      <SafeAreaView style={styles.container}>

        <Display value={this.state.displayValue}/>

        {/* // Keyboard */}
          <View style={styles.buttons}>
            <Button label="AC" onClick={this.clear}/>
            <Button label="+/-" />
            <Button label="%" />
            <Button label="/" operation onClick={this.setOperation}/>
            <Button label="7" onClick={this.addDigito}/>
            <Button label="8" onClick={this.addDigito}/>
            <Button label="9" onClick={this.addDigito}/>
            <Button label="*" operation onClick={this.setOperation}/>
            <Button label="4" onClick={this.addDigito}/>
            <Button label="5" onClick={this.addDigito}/>
            <Button label="6" onClick={this.addDigito}/>
            <Button label="-" operation onClick={this.setOperation}/>
            <Button label="1" onClick={this.addDigito}/>
            <Button label="2" onClick={this.addDigito}/>
            <Button label="3" onClick={this.addDigito}/>
            <Button label="+" operation onClick={this.setOperation}/>
            <Button label="0" double onClick={this.addDigito}/>
            <Button label="." onClick={this.addDigito}/>
            <Button label="=" operation onClick={this.setOperation}/>
          </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: "wrap",
  }
});
