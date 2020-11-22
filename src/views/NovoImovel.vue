<template>
  <section class="m-4">
    <div class="container mt-4">
      <h3 class="title is-3">Dados</h3>
      <div class="columns">
        <div class="column">
          <b-field label="Tipo do imóvel">
            <b-select
              placeholder="Selecione o tipo"
              required
              v-model="propertie.type"
            >
              <option v-for="type in listTypes" :key="type">{{ type }}</option>
            </b-select>
          </b-field>
        </div>

        <div class="column">
          <b-field label="Área (m²)">
            <b-input
              placeholder="Área"
              type="number"
              maxlength="10"
              v-model="propertie.area"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Quartos">
            <b-input
              placeholder="Quartos"
              type="number"
              maxlength="2"
              v-model="propertie.bedrooms"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Banheiros">
            <b-input
              placeholder="Banheiros"
              type="number"
              maxlength="2"
              v-model="propertie.bathrooms"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Suítes">
            <b-input
              placeholder="Suítes"
              type="number"
              maxlength="2"
              v-model="propertie.suits"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Vagas de garagem">
            <b-input
              placeholder="Vagas de garagem"
              type="number"
              maxlength="2"
              v-model="propertie.garage"
            ></b-input>
          </b-field>
        </div>
      </div>
      <b-field label="Descrição">
        <b-input
          v-model="propertie.description"
          maxlength="1000"
          type="textarea"
        ></b-input>
      </b-field>
      <hr />
      <h3 class="title is-3">Endereço</h3>
      <div class="columns">
        <div class="column is-two-thirds">
          <b-field label="Endereço">
            <b-input v-model="propertie.address.description"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Número">
            <b-input v-model="propertie.address.number"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Complemento">
            <b-input v-model="propertie.address.complement"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-field label="Cep">
            <b-input v-model="propertie.address.zip"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Bairro">
            <b-input v-model="propertie.address.neighborhood"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Cidade">
            <b-input v-model="propertie.address.city"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Estado">
            <b-input v-model="propertie.address.state"></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Sigla do estado">
            <b-input v-model="propertie.address.shortState"></b-input>
          </b-field>
        </div>
      </div>
      <hr />
      <h3 class="title is-3">Preços mensais</h3>
      <div class="columns">
        <div class="column">
          <b-field label="Aluguel">
            <b-input
              placeholder="Aluguel"
              type="number"
              maxlength="10"
              v-model="propertie.fees.mainPrice"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Taxa de condomínio">
            <b-input
              placeholder="Taxa do condomínio"
              type="number"
              maxlength="10"
              v-model="propertie.fees.condoFee"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Taxa de serviço">
            <b-input
              placeholder="Taxa de serviço"
              type="number"
              maxlength="10"
              v-model="propertie.fees.serviceFee"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Iptu">
            <b-input
              placeholder="Iptu"
              type="number"
              v-model="propertie.fees.iptu"
            ></b-input>
          </b-field>
        </div>
        <div class="column">
          <b-field label="Seguro incêndio">
            <b-input
              placeholder="Seguro incêndio"
              type="number"
              maxlength="10"
              v-model="propertie.fees.fireInsurance"
            ></b-input>
          </b-field>
        </div>
      </div>
      <hr />
      <h3 class="title is-3">Características do imóvel</h3>
      <p>Selecionados do imóvel: {{ propertie.amenities_unit }}</p>

      <div v-for="b in arrayUnit" :key="b.value">
        <section>
          <div class="block">
            <b-checkbox v-model="propertie.amenities_unit" :native-value="b">
              {{ b.name }}
            </b-checkbox>
          </div>
        </section>
      </div>
      <hr />
      <h3 class="title is-3">Características do prédio</h3>

      <p>Selecionados do prédio: {{ propertie.amenities_building }}</p>

      <div v-for="b in arrayBuilding" :key="b.value">
        <section>
          <div class="block">
            <b-checkbox
              v-model="propertie.amenities_building"
              :native-value="b"
            >
              {{ b.name }}
            </b-checkbox>
          </div>
        </section>
      </div>
      <hr />
      <h3 class="title is-3">Animais</h3>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.pets.allowCats"
            >Permite gatos</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.pets.allowDogs"
            >Permite cachorros</b-checkbox
          >
        </div>
      </div>
      <b-button class="mt-4" type="is-primary" @click="onSubmit" expanded
        >Gravar</b-button
      >
    </div>
  </section>
</template>

<script>
import { db } from "../firebaseConfig";
import { amenitiesBuilding } from "../amenities_building";
import { amenitiesUnit } from "../amenities_unit";

export default {
  name: "NovoImovel",
  methods: {
    onSubmit() {
      this.propertie.createdAt = Date();

      db.collection("properties")
        .add(this.propertie)
        .then(() => {
          alert("Imóvel adicionado com sucesso");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      listTypes: ["Apartamento", "Casa", "Kitnet/Studio"],
      propertie: {
        type: "Apartamento",
        area: 10,
        bedrooms: 1,
        bathrooms: 2,
        suits: 1,
        garage: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim enim leo, ac suscipit sapien feugiat et. Ut sit amet dolor consectetur, venenatis neque nec, ornare purus. Donec mi risus, elementum feugiat ex nec, facilisis tempor eros. Suspendisse et facilisis ex. Mauris fermentum, turpis vel egestas hendrerit, turpis quam sollicitudin tortor, sed vulputate magna lectus nec nunc. Mauris consectetur nisl id orci imperdiet, quis facilisis eros ultricies. Nam sagittis condimentum quam, ut euismod ante tempor eu. Donec velit augue, ultricies viverra lectus id, congue maximus leo. Proin euismod libero fringilla, pulvinar lorem vitae, posuere ex. Aenean ut tellus interdum, lacinia leo a, consectetur leo. Sed nec pulvinar odio. Praesent faucibus varius turpis, eu varius quam laoreet et. Praesent ultricies volutpat dignissim.",
        address: {
          description: "Rua Barão do Rio Branco",
          number: "719",
          complement: "Apartamento 001",
          neighborhood: "Centro",
          zip: "80010-190",
          city: "Curitiba",
          state: "Paraná",
          shortState: "PR",
        },
        fees: {
          mainPrice: 500,
          condoFee: 320,
          serviceFee: 95,
          iptu: 30,
          fireInsurance: 24,
        },
        pets: {
          allowCats: true,
          allowDogs: false,
        },
        amenities_unit: [],
        amenities_building: [],
        createdAt: Date(),
      },
    };
  },
  computed: {
    arrayBuilding() {
      return amenitiesBuilding;
    },
    arrayUnit() {
      return amenitiesUnit;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
