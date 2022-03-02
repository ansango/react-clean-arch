import Plant from "../../domain/entities/Plant";
import PlantRepository from "../../domain/repositories/PlantRepository";

const jsonURL =
  "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json";

export default class PlantRepositoryImpl implements PlantRepository {
  public async GetPlants(): Promise<Plant[]> {
    const response = await fetch(jsonURL);
    const json = await response.json();
    return json.map((item: Plant) => {
      return new Plant(item.id, item.name);
    });
  }
}
