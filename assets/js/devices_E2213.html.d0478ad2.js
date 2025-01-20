"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51417],{80599:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>l});var o=i(6254);const n={},a=(0,i(32991).A)(n,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[11]||(t[11]=(0,o.Lk)("h1",{id:"ikea-e2213",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ikea-e2213"},[(0,o.Lk)("span",null,"IKEA E2213")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"E2213")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=IKEA"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("IKEA")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"SOMRIG shortcut button")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"identify, battery, action, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2213.png",alt:"IKEA E2213"})])],-1))])]),t[12]||(t[12]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="printing-template" tabindex="-1"><a class="header-anchor" href="#printing-template"><span>Printing Template</span></a></h3><p>Template to print own covers is provided <a href="https://github.com/thatslolo/IKEA-SOMRIG-template" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button 4 times. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-device-didn-t-respond-to-ota-request" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-didn-t-respond-to-ota-request"><span>Troubleshooting: Device didn&#39;t respond to OTA request</span></a></h3><p>To resolve the <code>Device didn&#39;t respond to OTA request</code> error, you can try to push a button on it, shortly before you start the update, to wake up the Remote. Sometimes it also helps keeping the device awake, by pushing a button repeatedly until you read the first &quot;Updating... 0.00%&quot; message (about 5s).</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',8)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,o.eW)("."))]),t[13]||(t[13]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[10]||(t[10]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,o.Fv)('<ul><li><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. This device is asleep by default.You may need to wake it up first before sending the identify command.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>1_initial_press</code>, <code>1_long_press</code>, <code>1_short_release</code>, <code>1_long_release</code>, <code>1_double_press</code>, <code>2_initial_press</code>, <code>2_long_press</code>, <code>2_short_release</code>, <code>2_long_release</code>, <code>2_double_press</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10))])}]]),l=JSON.parse('{"path":"/devices/E2213.html","title":"IKEA E2213 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2213 control via MQTT","description":"Integrate your IKEA E2213 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:35:42.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Printing Template","slug":"printing-template","link":"#printing-template","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: Device didn\'t respond to OTA request","slug":"troubleshooting-device-didn-t-respond-to-ota-request","link":"#troubleshooting-device-didn-t-respond-to-ota-request","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1737405465000},"filePathRelative":"devices/E2213.md"}')}}]);