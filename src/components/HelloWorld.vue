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
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.laundry"
            >Lavanderia</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.balcony"
            >Varanda</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.gourmetBalcony"
            >Varanda gourmet</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.pool"
            >Piscina</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.bathtub"
            >Banheira</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.gasShower"
            >Chuveiro a gás</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.electricShower"
            >Chuveiro elétrico</b-checkbox
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.glassBox"
            >Box de vidro</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.electronicLock"
            >Fechadura eletrônica</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.maidBedroom"
            >Quarto de serviço</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.maidBathroom"
            >Banheiro de serviço</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.ceilingFan"
            >Ventilador de teto</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.kitchenCountertop"
            >Cozinha americana</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.blackoutCurtain"
            >Cortina corta luz</b-checkbox
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.noiseReductionCurtain"
            >Cortina anti ruído</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.furnished"
            >Mobiliado</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.washer"
            >Máquina de lavar</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.dishwasher"
            >Lavador de pratos</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.airConditioning"
            >Ar condicionado</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.kitchenCabinet"
            >Armário de cozinha</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.bathroomCabinet"
            >Armário de banheiro</b-checkbox
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.laundry"
            >Guarda-roupa</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.laundry"
            >Closet</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.singleBed"
            >Cama de solteiro</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.doubleBed"
            >Cama de casal</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.bathroomMirror"
            >Espelho no banheiro</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.table">Mesa</b-checkbox>
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.couch">Sofá</b-checkbox>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.tv"
            >Televisão</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.kitchenTools"
            >Utensílios de cozinha</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.stove"
            >Fogão</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.cooktop"
            >Cooktop</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.fridge"
            >Geladeira</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_unit.microwave"
            >Microondas</b-checkbox
          >
        </div>
        <div class="column"></div>
      </div>
      <hr />
      <h3 class="title is-3">Características do prédio</h3>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.gym"
            >Academia</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.elevator"
            >Elevador</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.barbecueGrill"
            >Churrasqueira</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.laundry"
            >Lavanderia</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.freeLaundry"
            >Lavanderia grátis</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.pool"
            >Piscina</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.playground"
            >Playground</b-checkbox
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.doorPerson"
            >Portaria</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.garden"
            >Jardim</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.sportsCourt"
            >Quadra de esportes</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.gourmetRoom"
            >Salão gourmet</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.partyRoom"
            >Salão de festas</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.steamRoom"
            >Sauna</b-checkbox
          >
        </div>
        <div class="column">
          <b-checkbox v-model="propertie.amenities_building.security"
            >Seguranças</b-checkbox
          >
        </div>
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

export default {
  name: "HelloWorld",
  methods: {
    onSubmit() {
      db.collection("properties")
        .add(this.propertie)
        .then((t) => {
          alert(JSON.stringify(t));
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
        amenities_unit: {
          laundry: true,
          balcony: true,
          gourmetBalcony: true,
          pool: false,
          bathtub: false,
          gasShower: true,
          electricShower: false,
          glassBox: true,
          electronicLock: false,
          maidBedroom: true,
          maidBathroom: true,
          ceilingFan: false,
          kitchenCountertop: false,
          blackoutCurtain: true,
          noiseReductionCurtain: true,
          furnished: false,
          washer: false,
          dishwasher: false,
          airConditioning: true,
          kitchenCabinet: true,
          bathroomCabinet: true,
          wardrobe: true,
          closet: false,
          singleBed: false,
          doubleBed: true,
          bathroomMirror: true,
          table: false,
          couch: false,
          tv: true,
          kitchenTools: false,
          stove: true,
          cooktop: true,
          fridge: true,
          microwave: true,
        },
        amenities_building: {
          gym: true,
          elevator: true,
          barbecueGrill: true,
          laundry: true,
          freeLaundry: false,
          pool: true,
          playground: false,
          doorPerson: true,
          garden: false,
          sportsCourt: false,
          gourmetRoom: true,
          partyRoom: true,
          steamRoom: true,
          security: true,
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
