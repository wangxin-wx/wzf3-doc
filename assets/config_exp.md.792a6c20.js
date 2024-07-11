import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.e2982a1c.js";const f=JSON.parse('{"title":"示例 (项目根目录下 config/config.*.ts 配置)","description":"","frontmatter":{},"headers":[],"relativePath":"config/exp.md","filePath":"config/exp.md"}'),l={name:"config/exp.md"},o=p(`<h1 id="示例-项目根目录下-config-config-ts-配置" tabindex="-1">示例 (项目根目录下 <code>config/config.*.ts</code> 配置) <a class="header-anchor" href="#示例-项目根目录下-config-config-ts-配置" aria-label="Permalink to &quot;示例 (项目根目录下 \`config/config.*.ts\` 配置)&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { ModuleOptions } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@trickd/nuxt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">trickd</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ModuleOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    https: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    domain: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    csp: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      directives: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;default-src&#39;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;&#39;self&#39;&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  isc: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;https://isctest.jiafly.cn:22022&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sso: </span><span style="color:#9ECBFF;">&#39;https://isctest.jiafly.cn:22022/isc_sso&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    frontmv: </span><span style="color:#9ECBFF;">&#39;http://isctest.jiafly.cn:22000/isc_frontmv_serv&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    service: </span><span style="color:#9ECBFF;">&#39;http://10.120.21.12:8080&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    appid: </span><span style="color:#9ECBFF;">&#39;ff80808182a071d60182a5285b510076&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    gateway: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    gateway: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      platform: </span><span style="color:#9ECBFF;">&#39;http://10.120.22.82:18080&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  apps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;app.exp&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;app.exp2&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      port: </span><span style="color:#79B8FF;">8080</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      enabled: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { ModuleOptions } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@trickd/nuxt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">trickd</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ModuleOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  server: {</span></span>
<span class="line"><span style="color:#24292E;">    https: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    domain: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    csp: {</span></span>
<span class="line"><span style="color:#24292E;">      enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      directives: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;default-src&#39;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;&#39;self&#39;&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  isc: {</span></span>
<span class="line"><span style="color:#24292E;">    enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&#39;https://isctest.jiafly.cn:22022&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sso: </span><span style="color:#032F62;">&#39;https://isctest.jiafly.cn:22022/isc_sso&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    frontmv: </span><span style="color:#032F62;">&#39;http://isctest.jiafly.cn:22000/isc_frontmv_serv&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    service: </span><span style="color:#032F62;">&#39;http://10.120.21.12:8080&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    appid: </span><span style="color:#032F62;">&#39;ff80808182a071d60182a5285b510076&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    gateway: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  proxy: {</span></span>
<span class="line"><span style="color:#24292E;">    gateway: {</span></span>
<span class="line"><span style="color:#24292E;">      platform: </span><span style="color:#032F62;">&#39;http://10.120.22.82:18080&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    timeout: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  apps: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;app.exp&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      enabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;app.exp2&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      port: </span><span style="color:#005CC5;">8080</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      enabled: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function c(t,E,r,y,i,F){return n(),a("div",null,e)}const C=s(l,[["render",c]]);export{f as __pageData,C as default};
