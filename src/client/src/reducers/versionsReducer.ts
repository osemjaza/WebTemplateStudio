import { IVersions } from "../types/version";
import { WIZARD_INFO_TYPEKEYS } from "../store/wizardContent/typeKeys";

/* State Shape
{
    {
        templatesVersion: string,
        wizardVersion: string
    }
}
*/

const initialState = {
  templatesVersion: "",
  wizardVersion: ""
};

const versions = (state: IVersions = initialState, action: any) => {
  switch (action.type) {
    case WIZARD_INFO_TYPEKEYS.GET_TEMPLATE_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default versions;
