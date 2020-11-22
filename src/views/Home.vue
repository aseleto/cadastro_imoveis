<template>
  <div class="container">
    <h3 class="title is-3 mt-4">Filtros</h3>
    <p>Selecionados: {{ selectedBuilding }}</p>
    <div v-for="b in arrayBuilding" :key="b.value">
      <section>
        <div class="block">
          <b-checkbox v-model="selectedBuilding" :native-value="b">
            {{ b.name }}
          </b-checkbox>
        </div>
      </section>
    </div>
    <b-button class="mt-4" type="is-primary" @click="filtrar" expanded
      >Filtrar</b-button
    >
    <hr />
    <ul>
      <li v-for="i in imoveis" :key="i.id">
        <div class="card mt-4">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ i.address.description }}, {{ i.address.number }} -
                  {{ i.address.neighborhood }}
                </p>
                <p class="subtitle is-6">
                  {{ i.address.city }} - {{ i.address.shortState }}
                </p>
              </div>
            </div>

            <div class="content">
              Banheiros: {{ i.bathrooms }} // Quartos: {{ i.bedrooms }} // Área:
              {{ i.area }} // Vagas de garagem: {{ i.garage }}
              <hr />
              <p class="subtitle is-5">
                Permite gatos: {{ i.pets.allowCats }} // Permite cachorros:
                {{ i.pets.allowDogs }}
              </p>
              <p class="subtitle is-5">{{ i.type }}:</p>
              <ul>
                <li v-for="unit in i.amenities_unit" :key="unit.value">
                  {{ unit.name }}
                </li>
              </ul>
              <p class="subtitle is-5">Condomínio:</p>
              <ul>
                <li
                  v-for="building in i.amenities_building"
                  :key="building.value"
                >
                  {{ building.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../firebaseConfig";
import { amenitiesBuilding } from "../amenities_building";
export default {
  name: "Home",
  data() {
    return {
      imoveis: [],
      selectedBuilding: [],
    };
  },
  firestore() {
    return {
      imoveis: db.collection("properties"),
    };
  },
  methods: {
    filtrar() {
      let propertiesRef = db.collection("properties");
      let query;

      if (this.selectedBuilding.length > 0) {
        this.selectedBuilding.forEach((el) => {
          query = propertiesRef.where(
            "amenities_building",
            "array-contains",
            el
          );
        });
        query
          .get()
          .then((snapshot) => {
            const documents = snapshot.docs.map((doc) => doc.data());
            console.log(documents);
            this.imoveis = documents;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        propertiesRef.get().then((snapshot) => {
          const documents = snapshot.docs.map((doc) => doc.data());
          console.log(documents);
          this.imoveis = documents;
        });
      }
    },
  },
  computed: {
    arrayBuilding() {
      return amenitiesBuilding;
    },
  },
};
</script>
