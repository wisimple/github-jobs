import axios from "axios";

export default class GithubJobServie {
  static async index(): Promise<any> {
    try {
      const res = await axios.get(
        "https://c-any.herokuapp.com/https://jobs.github.com/positions.json"
      );
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
