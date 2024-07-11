import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e2982a1c.js";const D=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[],"relativePath":"guide/deploy.md","filePath":"guide/deploy.md"}'),p={name:"guide/deploy.md"},o=l(`<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><h2 id="业务服务部署" tabindex="-1">业务服务部署 <a class="header-anchor" href="#业务服务部署" aria-label="Permalink to &quot;业务服务部署&quot;">​</a></h2><h3 id="源码部署" tabindex="-1">源码部署 <a class="header-anchor" href="#源码部署" aria-label="Permalink to &quot;源码部署&quot;">​</a></h3><p>当 <code>build</code> 完成后，在项目根目录会生成 <code>.dist</code> 目录，将 <code>.dist</code> 以及项目根目录的 <code>public</code> 目录复制到部署环境，使用 <code>pm2</code> 守护进程或 <code>bash</code> 启动。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># pm2</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./.dist/ecosystem.config.cjs</span></span>
<span class="line"><span style="color:#6A737D;"># bash</span></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./dist/start.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># pm2</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./.dist/ecosystem.config.cjs</span></span>
<span class="line"><span style="color:#6A737D;"># bash</span></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./dist/start.sh</span></span></code></pre></div><h3 id="环境变量-源码部署" tabindex="-1">环境变量（源码部署） <a class="header-anchor" href="#环境变量-源码部署" aria-label="Permalink to &quot;环境变量（源码部署）&quot;">​</a></h3><p>尽管是用 <code>trickd build --config &lt;config&gt;</code> 根据不同 <code>config</code> 构建生产包，当部署时，运行环境仍可能存在变化，此时可以配置环境变量修改配置。</p><p>例如，当构建时，配置如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">trickd</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ModuleOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  isc: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    enabled: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">trickd</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ModuleOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  isc: {</span></span>
<span class="line"><span style="color:#24292E;">    enabled: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如在部署环境需要修改 <code>mode</code>，可添加环境变量：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// .dist/ecosystem.config.cjs</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  apps : [{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      NITRO_PUBLIC_TRICKD_MODE: </span><span style="color:#9ECBFF;">&quot;safe&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// .dist/ecosystem.config.cjs</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  apps : [{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    env: {</span></span>
<span class="line"><span style="color:#24292E;">      NITRO_PUBLIC_TRICKD_MODE: </span><span style="color:#032F62;">&quot;safe&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>变量命名规则：以 <code>NITRO_PUBLIC_TRICKD_</code> 作为前缀，遇到大写或者子属性时，添加下划线</p><h2 id="serverless网关部署" tabindex="-1">serverless网关部署 <a class="header-anchor" href="#serverless网关部署" aria-label="Permalink to &quot;serverless网关部署&quot;">​</a></h2><h3 id="docker环境" tabindex="-1">docker环境 <a class="header-anchor" href="#docker环境" aria-label="Permalink to &quot;docker环境&quot;">​</a></h3><p>镜像仓库地址：<a href="http://10.120.22.181:8080/repo/tags/trickd-core" target="_blank" rel="noreferrer">http://10.120.22.181:8080/repo/tags/trickd-core</a></p><ol><li>拉取镜像：<code>docker pull 10.120.22.181:5000/trickd-core:0.0.1</code></li><li>保存镜像到本地：<code>docker save -o trickd-core-0.0.1.tar 10.120.22.181:5000/trickd-core:0.0.1</code></li><li>服务器加载镜像：<code>docker load -i trickd-core-0.0.1.tar</code></li><li>新建<code>docker-compose.yaml</code>文件，参考配置：</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.1&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">trickd-core</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10.120.22.181:5000/trickd-core:0.0.1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">trickd-core</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># hosts配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">TRICKD0_HOSTS=10.120.22.222,isctest.jiafly.cn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># debug级别日志</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - TRICKD0_LOGGER_DEBUG=true</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 开启密钥验证页面</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">TRICKD0_SMPAGE_ENABLE=true</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - DATABASE_URL=mysql://root:1234abcD@10.120.21.12:13306/trickd</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># redis类型&#39;single&#39; 普通 | &#39;cluster&#39; 集群 | &#39;sentinel&#39; 哨兵</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">TRICKD0_RDS_TYPE=cluster</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># redis地址，cluster和sentinel模式时，以,分割</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">TRICKD0_RDS_HOST=10.120.22.81:7001,10.120.22.81:7002,10.120.22.81:7003,10.120.22.81:8001,10.120.22.81:8002,10.120.22.81:8003</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># redis密码</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">TRICKD0_RDS_PWD=1234@abcD</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">3000:3000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.1&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">trickd-core</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10.120.22.181:5000/trickd-core:0.0.1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">trickd-core</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># hosts配置</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">TRICKD0_HOSTS=10.120.22.222,isctest.jiafly.cn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># debug级别日志</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - TRICKD0_LOGGER_DEBUG=true</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 开启密钥验证页面</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">TRICKD0_SMPAGE_ENABLE=true</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - DATABASE_URL=mysql://root:1234abcD@10.120.21.12:13306/trickd</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># redis类型&#39;single&#39; 普通 | &#39;cluster&#39; 集群 | &#39;sentinel&#39; 哨兵</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">TRICKD0_RDS_TYPE=cluster</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># redis地址，cluster和sentinel模式时，以,分割</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">TRICKD0_RDS_HOST=10.120.22.81:7001,10.120.22.81:7002,10.120.22.81:7003,10.120.22.81:8001,10.120.22.81:8002,10.120.22.81:8003</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># redis密码</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">TRICKD0_RDS_PWD=1234@abcD</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">3000:3000</span></span></code></pre></div><ol start="4"><li>使用docker-compose启动：<code>docker-compose up -d</code></li></ol>`,18),e=[o];function c(t,r,E,i,y,d){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{D as __pageData,u as default};
