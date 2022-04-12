import { JointResult } from "./jointResult";
import Axios from "axios";

export class YapClient {
  private _jointUrl: string;
  /**
   * Create new instance of YAP Client
   * @param url YAP API url, for local use http://localhost:8000
   */
  constructor(private url: string = "http://localhost:8000") {
    this._jointUrl = `${url}/yap/heb/joint`;
  }

  /**
   * Joint morphological analysis
   * @param text Hebrew text to analyze
   * @returns Analysis object with morphological,
   * disambiguation and dependency tree analysis.
   */
  async jointAnalysis(text: string): Promise<JointResult> {
    const body = { text: `${text}  ` };
    const { data } = await Axios.post(this._jointUrl, body);
    return {
      depTree: data.dep_tree,
      mdLattice: data.md_lattice,
      maLattice: data.ma_lattice,
    };
  }
}
