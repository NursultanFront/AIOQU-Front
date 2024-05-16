import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
// import type { Advisor, AdvisorList, Registered } from './types'

export class SpecialitiesRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public specialities() {
    return this.getRequest("/specialities/");
  }
}
