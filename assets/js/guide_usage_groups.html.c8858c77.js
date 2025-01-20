"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87793],{39699:(e,a,o)=>{o.r(a),o.d(a,{comp:()=>t,data:()=>i});var n=o(6254);const s={},t=(0,o(32991).A)(s,[["render",function(e,a){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a[7]||(a[7]=(0,n.Fv)('<h1 id="groups" tabindex="-1"><a class="header-anchor" href="#groups"><span>Groups</span></a></h1><p>Zigbee2MQTT has support for Zigbee groups. By using Zigbee groups you can control multiple devices simultaneously with one command.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Groups are much more efficient than controlling devices separately as it significantly reduces the stress on a network when controlling multiple devices at once.</p></div><h2 id="creating-a-group" tabindex="-1"><a class="header-anchor" href="#creating-a-group"><span>Creating a group</span></a></h2>',4)),(0,n.Lk)("p",null,[a[1]||(a[1]=(0,n.eW)("Groups can be created via the frontend (easiest), ")),(0,n.bF)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestgroupadd"},{default:(0,n.k6)((()=>a[0]||(a[0]=[(0,n.eW)("MQTT")]))),_:1}),a[2]||(a[2]=(0,n.eW)(" or by adding them to the ")),a[3]||(a[3]=(0,n.Lk)("code",null,"configuration.yaml",-1)),a[4]||(a[4]=(0,n.eW)(" as shown below."))]),a[8]||(a[8]=(0,n.Fv)('<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>Add the following to your <code>configuration.yaml</code>.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">groups</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># ID, each group should have a different numerical ID</span></span>\n<span class="line">    <span class="token key atrule">&#39;1&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token comment"># Required: Name which will be used to control the group</span></span>\n<span class="line">        <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> group_1</span>\n<span class="line">        <span class="token comment"># Required: Retain messages (true/false) (default: false)</span></span>\n<span class="line">        <span class="token key atrule">retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">        <span class="token comment"># Optional: Default transition to be used when e.g. changing brightness (in seconds) (default: 0)</span></span>\n<span class="line">        <span class="token key atrule">transition</span><span class="token punctuation">:</span> <span class="token number">2</span></span>\n<span class="line">        <span class="token comment"># Optional: Change group state when one of the devices in it changes state, see &#39;State changes&#39; below (default: true)</span></span>\n<span class="line">        <span class="token key atrule">optimistic</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">        <span class="token comment"># Optional: Control when state OFF is published for a group, see &quot;State changes&quot; below (default: all_members_off)</span></span>\n<span class="line">        <span class="token key atrule">off_state</span><span class="token punctuation">:</span> <span class="token string">&#39;all_members_off&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The groupID (in the above example <code>&#39;1&#39;</code>) should be a numerical string. In case you want to use a hexadecimal groupID (e.g. <code>0xe24c</code>) you should first convert it to a numerical string (e.g. <code>57932</code>).</p><p>If using the Home Assistant add-on, restart it after modifying your <code>configuration.yaml</code> as above.</p><h2 id="mqtt-commands" tabindex="-1"><a class="header-anchor" href="#mqtt-commands"><span>MQTT commands</span></a></h2>',6)),(0,n.Lk)("p",null,[a[6]||(a[6]=(0,n.eW)("To add, remove, rename and change the options of a group, see ")),(0,n.bF)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#group"},{default:(0,n.k6)((()=>a[5]||(a[5]=[(0,n.eW)("MQTT Topics and Messages groups section")]))),_:1})]),a[9]||(a[9]=(0,n.Fv)('<p>Devices can also be added/removed from groups via MQTT, the possible topics are:</p><ul><li><code>zigbee2mqtt/bridge/request/group/members/add</code>: add a device to a group</li><li><code>zigbee2mqtt/bridge/request/group/members/remove</code> remove a device from a group</li><li><code>zigbee2mqtt/bridge/request/group/members/remove_all</code> remove a device from all groups</li></ul><p>The payload should be <code>{&quot;group&quot;: GROUP, &quot;device&quot;: DEVICE}</code> where <code>GROUP</code> is the <code>friendly_name</code> of the group you want to add/remove the device from, <code>DEVICE</code> is the <code>friendly_name</code> of the device you want to add/remove from the group. Example payload: <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_bulb&quot;}</code>, example response: <code>{&quot;data&quot;:{&quot;device&quot;:&quot;my_bulb&quot;,&quot;endpoint&quot;:&quot;default&quot;,&quot;group&quot;:&quot;my_group&quot;},&quot;status&quot;:&quot;ok&quot;}</code>. In case of executing a <code>remove_all</code> the <code>group</code> property in the request can be omitted.</p><p>When removing a device from a group and when the group has any devices bound to it. The reporting of this members will be disabled, if you want to skip this use <code>skip_disable_reporting</code> (e.g. <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_bulb&quot;, &quot;skip_disable_reporting&quot;: true}</code>).</p><h2 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling"><span>Controlling</span></a></h2><p>Controlling a group is similar to controlling a single device. For example to turn on all devices that are part of group send a MQTT message to <code>zigbee2mqtt/[GROUP_FRIENDLY_NAME]/set</code> with payload:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ON&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="state-changes" tabindex="-1"><a class="header-anchor" href="#state-changes"><span>State changes</span></a></h2><p>By default when one of the devices in a group changes its state, the group state will update to reflect the change. The behaviour of the <code>state</code> property can be controlled through the <code>off_state</code> option. There are 2 possible options:</p><ul><li><code>all_members_off</code> (default): The group <code>state</code> will stay <code>ON</code> if at least one of the group member is in <code>state</code> <code>ON</code>.</li><li><code>last_member_state</code>: The group <code>state</code> will equal the <code>state</code> of the member who last changed state.</li></ul><p>When the state of a group is changed by a command (so not via a state change of a device in it), all devices in the group will also change its state. This behavior can be disabled by setting <code>optimistic: false</code> for the group.</p><h2 id="how-do-groups-work" tabindex="-1"><a class="header-anchor" href="#how-do-groups-work"><span>How do groups work?</span></a></h2><p>By using the above <code>add</code> command above, a device will be added to a group. The device itself is responsible for storing to which groups it belongs. Others, e.g. the coordinator, do not have knowledge to which groups a device belongs.</p><p>When using the <code>set</code> command, e.g. to turn on all devices in a group, a broadcast request is send to <strong>all</strong> devices in the network. The device itself then determines if it belongs to that group and if it should execute the command.</p><h2 id="adding-a-specific-endpoint" tabindex="-1"><a class="header-anchor" href="#adding-a-specific-endpoint"><span>Adding a specific endpoint</span></a></h2><p>In case you want to add a device to a group with multiple endpoints, e.g. a QBKG03LM with 2 buttons, you can specify it with the request payload <code>{&quot;group&quot;: GROUP, &quot;device&quot;: DEVICE, &quot;endpoint&quot;: ENDPOINT}</code> where <code>ENDPOINT</code> is the desired endpoint name or ID. Example request payload <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;my_switch&quot;,&quot;endpoint&quot;:&quot;right&quot;}</code>.</p>',16))])}]]),i=JSON.parse('{"path":"/guide/usage/groups.html","title":"Groups","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Creating a group","slug":"creating-a-group","link":"#creating-a-group","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"MQTT commands","slug":"mqtt-commands","link":"#mqtt-commands","children":[]},{"level":2,"title":"Controlling","slug":"controlling","link":"#controlling","children":[]},{"level":2,"title":"State changes","slug":"state-changes","link":"#state-changes","children":[]},{"level":2,"title":"How do groups work?","slug":"how-do-groups-work","link":"#how-do-groups-work","children":[]},{"level":2,"title":"Adding a specific endpoint","slug":"adding-a-specific-endpoint","link":"#adding-a-specific-endpoint","children":[]}],"git":{"updatedTime":1737405465000},"filePathRelative":"guide/usage/groups.md"}')}}]);