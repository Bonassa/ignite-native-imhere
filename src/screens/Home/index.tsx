import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd(name: string){
    if(participants.includes(name)){
      return Alert.alert("Adicionar participante", "Este participante já está presente na lista");
    }

    setParticipants(prevState => [...prevState, name]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string){
    // const filtredList = participants.filter(item => item !== name);

    Alert.alert('Remover participante', `Deseja remover o ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(item => item !== name)),
        style: "destructive"
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleParticipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item} 
            onRemove={() => handleRemoveParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? {'\n'} Adicione participantes
          </Text>
        )}
      />
    </View>
  )
}