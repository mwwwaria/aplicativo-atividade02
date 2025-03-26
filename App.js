import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView} from 'react-native';


const Card = ({ titulo, descricao }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        lista_atores: [
          {id: '1', ator: 'Fernanda Torres', papel: 'Eunice Paiva', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Fernanda_Torres-68482.jpg/640px-Fernanda_Torres-68482.jpg"},
          {id: '2', ator: 'Selton Mello', papel: 'Rubens Paiva', image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Selton_Mello-68509.jpg"},
          {id: '3', ator: 'Fernanda Montenegro', papel: 'Eunice Paiva', image: "https://br.web.img3.acsta.net/c_310_420/pictures/21/12/13/18/50/2785506.png"},
          {id: '4', ator: 'Valentina Herszage', papel: 'Vera "Veroca" Paiva', image: "https://capricho.abril.com.br/wp-content/uploads/2025/01/valentina-2.jpg?quality=85&strip=info&crop=1&resize=1080,565"},
          {id: '5', ator: 'Bárbara Luz', papel: 'Ana Lúcia "Nalu" Paiva', image: "https://www.condemais.com.br/wp/wp-content/uploads/2019/01/BarbaraLuz_270122_Foto_Nereu-Jr_3494.jpg"},
          {id: '6', ator: 'Guilherme Silveira', papel: 'Marcelo Rubens Paiva', image: "https://veredas.art/wp-content/uploads/2024/12/Guilherme-Silveira-AR-2025-Foto-21-e1741727640358-768x737.jpg"},
        ]
      };
    }

  render() {
    return(
      <View style={styles.container}>
      <Image
          source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/10/Creditos_-ALILEDARAONAWALE.jpg?w=1024' }}
          style={styles.img}
        />

      <Card
          titulo="Ainda Estou Aqui"
          descricao="Uma mulher casada com um ex-político durante a ditadura militar no Brasil é obrigada a se reinventar e a traçar um novo destino para si e os filhos depois que a vida de sua família é impactada por um ato violento e arbitrário"
        />

      <Card 
          descricao={
            "Diretor: Walter Salles\n" +
            "Gêneros: Drama, História\n" +
            "Duração: 2h 17 min\n" +
            "Lançamento: 07/11/2024\n" +
            "IMDB: 8.4/10"
          }
        />

      <Text style={styles.texto}>Elenco</Text>


      <FlatList 
          data={this.state.lista_atores}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Atores data={item} />}
            />
      
      </View>
    );
  }
}

export default App;

class Atores extends Component {
  render() {
    return(
      <View style={styles.lista}>
        <Image source={{ uri: this.props.data.image }} style={styles.imglista} />
        <View style={styles.containerLista}>
        <Text style={styles.atorLista}> {this.props.data.ator}</Text>
        <Text style={styles.papelLista}> {this.props.data.papel}</Text>
        </View>
      </View>   
    );
  }
}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#677B5B'

  },

  texto: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 30,
    marginBottom: 10,

  },

  card: {
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#2F1D14',
    elevation: 7,
    margin: 5

  },

  titulo: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 30

  },

  descricao: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',

  },

  img: {
    margin: 5,
    height: 220,
    width: 370,
    borderRadius: 25,
    marginBottom: 0

  },

  containerLista: {
    flexDirection: 'column',

  },

  lista: {
    backgroundColor: '#2F1D14',
    height: 70,
    marginBottom: 10, 
    flexDirection: 'row'

  },

  atorLista: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 21,
    flex: 1,

  },

  papelLista: {
    color: 'white',
    fontFamily: 'NotoSerif_400Regular',
    fontSize: 16,
    flex: 1,

  },

  imglista: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 5

  }
});