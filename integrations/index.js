import * as HubSpot from "./HubSpot";
import * as GA from "./GA";
import * as Hotjar from "./Hotjar";
import * as GoogleAds from "./GoogleAds";

let integrations = { HS: HubSpot.default, GA: GA.default, HOTJAR: Hotjar.default, GOOGLEADS: GoogleAds.default };

export { integrations };