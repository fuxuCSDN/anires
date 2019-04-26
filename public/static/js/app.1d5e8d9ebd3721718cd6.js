webpackJsonp([1], {
	40: function(n, e) {},
	41: function(n, e, t) {
		t(88);
		var r = t(14)(t(48), t(96), "data-v-647e008b", null);
		n.exports = r.exports
	},
	42: function(n, e, t) {
		t(86);
		var r = t(14)(t(49), t(94), "data-v-35c047fd", null);
		n.exports = r.exports
	},
	43: function(n, e, t) {
		t(85);
		var r = t(14)(t(46), t(93), "data-v-22ce9519", null);
		n.exports = r.exports
	},
	44: function(n, e, t) {
		t(87);
		var r = t(14)(t(47), t(95), "data-v-53c8d54c", null);
		n.exports = r.exports
	},
	46: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(15),
			o = t.n(r),
			i = t(25),
			a = t.n(i),
			s = t(24),
			u = t.n(s),
			c = t(42),
			l = t.n(c),
			d = t(41),
			h = t.n(d),
			p = t(40);
		t.n(p);
		e.default = {
			name: "app",
			components: {
				StyleEditor: l.a,
				ResumeEditor: h.a
			},
			data: function() {
				return {
					interval: 10,
					currentStyle: "",
					enableHtml: !1,
					fullStyle: ["/*\n* Inspired by http://strml.net/\n* 大家好，我是Jack。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
					currentMarkdown: "",
					fullMarkdown: "个人信息\n====\n\n性别：男\n\n年龄：22\n\n居住地:宁波\n\n手机：134******460\n\nE-mail：1612082305@qq.com\n\n技能\n====\n\n工程造价方面\n----\n  - 建筑工程图纸及实物识图\n  - 各种图形计算式应用\n  - 各种软件应用\n  - 软件计量计价方法\n  \n计算机方面\n----\n  - 计算机基础\n  - 网络技术\n  - 多种编程语言\n  - 网站搭建\n  - Linux系统\n  - 博客系统\n  - 公众号开发\n  - 逆向工程\n  - 渗透测试\n\n语言能力\n----\n  - 英语熟练\n  - 口语熟练\n  - 读写熟练\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n优点及特长\n----\n  - 积极乐观\n  - 热衷运动\n  - 打字熟练\n  - 爱好学习\n  - 善于处理人际关系\n  - 管理能力出色\n  - 行事果断\n\n工作经历\n----\n\n1. 上海东华建设造价咨询有限公司宁波市分公司\n2. 求学期间打过多份工\n\n学历\n----\n\n大专\n\n文章\n----\n\n* [技术博客](http://www.9cat.top)\n\n联系方式\n----\n\n* 微信：fuxuCSDN\n\n鸣谢\n----\n\n* 我对世界了解的不多，时常觉得自己是井底之蛙。\n* 我，挺乐天派的一个人，不惧怕失败和挫折。吃苦耐劳，严于律己，跟什么人都敢交朋友，特别仗义、接地气。有人问，那你的缺点呢？我当然也有缺点：不记事，不会算计。打个比方，有人会留意洗澡热水卡花费了多少，而我至始至终的结果是，洗着洗着突然断热水了。然后，用冷水洗完。\n* 我这一路上不断学习和成长，多亏了我的良师益友们，这里我想对他们说声谢谢！\n* 到底适合做什么工作，我也不好确定，我更喜欢做一个管理者。大学里学的是工程造价，可我对这个专业并不感冒，耐心和细心的事务性工作不适合我。后来，我无意中接触了编程，并自学了C语言。喜欢编程，喜欢创造的感觉。它改变了我的思维方式\n* 学习心理学，让灵魂变得有趣，也会让你更受欢迎。讲个例子：大学宿舍存在因作息不同而相互影响休息的现象。A叫了几个哥们在寝室打牌，室友根本劝说不住，眼看就十二点多了。这里最妥善的解决方式是，给他们每人拿杯水，让他们放松，插话道：“打了这么久，要不休息一下，吃点宵夜？”这种处理方法很巧妙。\n* 在社交领域，腾讯独霸天下20年，在电商领域，毫无疑问，是阿里的天下，虽有京东、苏宁等后起之秀，但都没有革命性的模式或产品。美团在团购领域的成功，既迎合了中国消费者的心理，也强化了这种心理。这些公司和老板都是我无比崇拜的IT英雄！\n* 在此，我要对所有的所有，说一声谢谢，谢谢你们对我的关心和支持！有你们的存在，让我对明天充满希望，对未来充满信心！不管有没有找到合适的工作，我认识了一群朋友，我非常满意！\n* 我回复了一些朋友的信息，还有很多朋友的信息我没能及时回复，在此，我表示深深的歉意！\n\n"
				}
			},
			created: function() {
				this.makeResume()
			},
			methods: {
				makeResume: function() {
					function n() {
						return e.apply(this, arguments)
					}
					var e = u()(a.a.mark(function n() {
						return a.a.wrap(function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, this.progressivelyShowStyle(0);
								case 2:
									return n.next = 4, this.progressivelyShowResume();
								case 4:
									return n.next = 6, this.progressivelyShowStyle(1);
								case 6:
									return n.next = 8, this.showHtml();
								case 8:
									return n.next = 10, this.progressivelyShowStyle(2);
								case 10:
								case "end":
									return n.stop()
							}
						}, n, this)
					}));
					return n
				}(),
				showHtml: function() {
					var n = this;
					return new o.a(function(e, t) {
						n.enableHtml = !0, e()
					})
				},
				progressivelyShowStyle: function(n) {
					var e = this;
					return new o.a(function(t, r) {
						var o = e.interval,
							i = u()(a.a.mark(function e() {
								var r, s, u, c, l, d = this;
								return a.a.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (r = this.fullStyle[n]) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											s = this.fullStyle.filter(function(e, t) {
												return t <= n
											}).map(function(n) {
												return n.length
											}).reduce(function(n, e) {
												return n + e
											}, 0), u = s - r.length, this.currentStyle.length < s ? (c = this.currentStyle.length - u, l = r.substring(c, c + 1) || " ", this.currentStyle += l, "\n" === r.substring(c - 1, c) && this.$refs.styleEditor && this.$nextTick(function() {
												d.$refs.styleEditor.goBottom()
											}), setTimeout(i, o)) : t();
										case 6:
										case "end":
											return e.stop()
									}
								}, e, this)
							})).bind(e);
						i()
					})
				},
				progressivelyShowResume: function() {
					var n = this;
					return new o.a(function(e, t) {
						var r = n.fullMarkdown.length,
							o = n.interval;
						! function t() {
							if (n.currentMarkdown.length < r) {
								n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
								n.currentMarkdown[n.currentMarkdown.length - 1];
								"\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
									return n.$refs.resumeEditor.goBottom()
								}), setTimeout(t, o)
							} else e()
						}()
					})
				}
			}
		}
	},
	47: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(15),
			o = t.n(r),
			i = t(25),
			a = t.n(i),
			s = t(24),
			u = t.n(s),
			c = t(42),
			l = t.n(c),
			d = t(41),
			h = t.n(d),
			p = t(40);
		t.n(p);
		e.default = {
			name: "app",
			components: {
				StyleEditor: l.a,
				ResumeEditor: h.a
			},
			data: function() {
				return {
					interval: 10,
					currentStyle: "",
					enableHtml: !1,
					fullStyle: ["/*\n* Inspired by http://strml.net/\n* 大家好，我是JACK。\n* 我来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n", "\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n", '\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
					currentMarkdown: "",
					fullMarkdown: "个人信息\n====\n\n性别：男\n\n年龄：22\n\n居住地:宁波\n\n手机：134******460\n\nE-mail：1612082305@qq.com\n\n技能\n====\n\n工程造价方面\n----\n  - 建筑工程图纸及实物识图\n  - 各种图形计算式应用\n  - 各种软件应用\n  - 软件计量计价方法\n  \n计算机方面\n----\n  - 计算机基础\n  - 网络技术\n  - 多种编程语言\n  - 网站搭建\n  - Linux系统\n  - 博客系统\n  - 公众号开发\n  - 逆向工程\n  - 渗透测试\n\n语言能力\n----\n  - 英语熟练\n  - 口语熟练\n  - 读写熟练\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n优点及特长\n----\n  - 积极乐观\n  - 热衷运动\n  - 打字熟练\n  - 爱好学习\n  - 善于处理人际关系\n  - 管理能力出色\n  - 行事果断\n\n工作经历\n----\n\n1. 上海东华建设造价咨询有限公司宁波市分公司\n2. 求学期间打过多份工\n\n学历\n----\n\n大专\n\n文章\n----\n\n* [技术博客](http://www.9cat.top)\n\n联系方式\n----\n\n* 微信：fuxuCSDN\n\n鸣谢\n----\n\n* 我对世界了解的不多，时常觉得自己是井底之蛙。\n* 我，挺乐天派的一个人，不惧怕失败和挫折。吃苦耐劳，严于律己，跟什么人都敢交朋友，特别仗义、接地气。有人问，那你的缺点呢？我当然也有缺点：不记事，不会算计。打个比方，有人会留意洗澡热水卡花费了多少，而我至始至终的结果是，洗着洗着突然断热水了。然后，用冷水洗完。\n* 我这一路上不断学习和成长，多亏了我的良师益友们，这里我想对他们说声谢谢！\n* 到底适合做什么工作，我也不好确定，我更喜欢做一个管理者。大学里学的是工程造价，可我对这个专业并不感冒，耐心和细心的事务性工作不适合我。后来，我无意中接触了编程，并自学了C语言。喜欢编程，喜欢创造的感觉。它改变了我的思维方式\n* 学习心理学，让灵魂变得有趣，也会让你更受欢迎。讲个例子：大学宿舍存在因作息不同而相互影响休息的现象。A叫了几个哥们在寝室打牌，室友根本劝说不住，眼看就十二点多了。这里最妥善的解决方式是，给他们每人拿杯水，让他们放松，插话道：“打了这么久，要不休息一下，吃点宵夜？”这种处理方法很巧妙。\n* 在社交领域，腾讯独霸天下20年，在电商领域，毫无疑问，是阿里的天下，虽有京东、苏宁等后起之秀，但都没有革命性的模式或产品。美团在团购领域的成功，既迎合了中国消费者的心理，也强化了这种心理。这些公司和老板都是我无比崇拜的IT英雄！\n* 在此，我要对所有的所有，说一声谢谢，谢谢你们对我的关心和支持！有你们的存在，让我对明天充满希望，对未来充满信心！不管有没有找到合适的工作，我认识了一群朋友，我非常满意！\n* 我回复了一些朋友的信息，还有很多朋友的信息我没能及时回复，在此，我表示深深的歉意！\n\n"
				}
			},
			created: function() {
				this.makeResume()
			},
			methods: {
				makeResume: function() {
					function n() {
						return e.apply(this, arguments)
					}
					var e = u()(a.a.mark(function n() {
						return a.a.wrap(function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, this.progressivelyShowStyle(0);
								case 2:
									return n.next = 4, this.progressivelyShowResume();
								case 4:
									return n.next = 6, this.progressivelyShowStyle(1);
								case 6:
									return n.next = 8, this.showHtml();
								case 8:
									return n.next = 10, this.progressivelyShowStyle(2);
								case 10:
								case "end":
									return n.stop()
							}
						}, n, this)
					}));
					return n
				}(),
				showHtml: function() {
					var n = this;
					return new o.a(function(e, t) {
						n.enableHtml = !0, n.$nextTick(function() {
							n.$refs.resumeEditor.goTop()
						}), e()
					})
				},
				progressivelyShowStyle: function(n) {
					var e = this;
					return new o.a(function(t, r) {
						var o = e.interval,
							i = u()(a.a.mark(function e() {
								var r, s, u, c, l, d = this;
								return a.a.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (r = this.fullStyle[n]) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											s = this.fullStyle.filter(function(e, t) {
												return t <= n
											}).map(function(n) {
												return n.length
											}).reduce(function(n, e) {
												return n + e
											}, 0), u = s - r.length, this.currentStyle.length < s ? (c = this.currentStyle.length - u, l = r.substring(c, c + 1) || " ", this.currentStyle += l, "\n" === r.substring(c - 1, c) && this.$refs.styleEditor && this.$nextTick(function() {
												d.$refs.styleEditor.goBottom()
											}), setTimeout(i, o)) : t();
										case 6:
										case "end":
											return e.stop()
									}
								}, e, this)
							})).bind(e);
						i()
					})
				},
				progressivelyShowResume: function() {
					var n = this;
					return new o.a(function(e, t) {
						var r = n.fullMarkdown.length,
							o = n.interval;
						! function t() {
							if (n.currentMarkdown.length < r) {
								n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
								n.currentMarkdown[n.currentMarkdown.length - 1];
								"\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
									return n.$refs.resumeEditor.goBottom()
								}), setTimeout(t, o)
							} else e()
						}()
					})
				}
			}
		}
	},
	48: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(89),
			o = t.n(r);
		e.default = {
			props: ["markdown", "enableHtml"],
			name: "ResumeEditor",
			computed: {
				result: function() {
					return this.enableHtml ? o()(this.markdown) : this.markdown
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				},
				goTop: function() {
					this.$refs.container.scrollTop = 0
				}
			}
		}
	},
	49: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(90),
			o = t.n(r);
		e.default = {
			name: "Editor",
			props: ["code"],
			computed: {
				highlightedCode: function() {
					return o.a.highlight(this.code, o.a.languages.css)
				},
				codeInStyleTag: function() {
					return "<style>" + this.code + "</style>"
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				}
			}
		}
	},
	50: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(45),
			o = t(43),
			i = t.n(o),
			a = t(44),
			s = t.n(a),
			u = document.documentElement.clientWidth;
		new r.a({
			el: "#app",
			render: function(n) {
				return n(u > 500 ? i.a : s.a)
			}
		})
	},
	85: function(n, e) {},
	86: function(n, e) {},
	87: function(n, e) {},
	88: function(n, e) {},
	93: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("StyleEditor", {
					ref: "styleEditor",
					attrs: {
						code: n.currentStyle
					}
				}), n._v(" "), t("ResumeEditor", {
					ref: "resumeEditor",
					attrs: {
						markdown: n.currentMarkdown,
						enableHtml: n.enableHtml
					}
				})], 1)
			},
			staticRenderFns: []
		}
	},
	94: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "styleEditor"
				}, [t("div", {
					staticClass: "code",
					domProps: {
						innerHTML: n._s(n.codeInStyleTag)
					}
				}), n._v(" "), t("pre", {
					domProps: {
						innerHTML: n._s(n.highlightedCode)
					}
				})])
			},
			staticRenderFns: []
		}
	},
	95: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("StyleEditor", {
					ref: "styleEditor",
					attrs: {
						code: n.currentStyle
					}
				}), n._v(" "), t("ResumeEditor", {
					ref: "resumeEditor",
					attrs: {
						markdown: n.currentMarkdown,
						enableHtml: n.enableHtml
					}
				})], 1)
			},
			staticRenderFns: []
		}
	},
	96: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "resumeEditor",
					class: {
						htmlMode: n.enableHtml
					}
				}, [n.enableHtml ? t("div", {
					domProps: {
						innerHTML: n._s(n.result)
					}
				}) : t("pre", [n._v(n._s(n.result))])])
			},
			staticRenderFns: []
		}
	}
}, [50]);
//# sourceMappingURL=app.1d5e8d9ebd3721718cd6.js.map