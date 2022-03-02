import Plant from "../entities/Plant";
import PlantRepository from "../repositories/PlantRepository";
export default class PlantService {
  private plantRepository: PlantRepository;
  constructor(plantRepository: PlantRepository) {
    this.plantRepository = plantRepository;
  }
  public async GetPlants(): Promise<Plant[]> {
    return this.plantRepository.GetPlants();
  }
}
