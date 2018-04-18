webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_mapbox_gl__ = __webpack_require__("../../../../ngx-mapbox-gl/esm5/ngx-mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_courses_overview_courses_overview_component__ = __webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_app_routing_module__ = __webpack_require__("../../../../../src/app/modules/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_action_bar_action_bar_component__ = __webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_map_cell_map_cell_component__ = __webpack_require__("../../../../../src/app/components/map-cell/map-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_page_directive__ = __webpack_require__("../../../../../src/app/directives/page.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_next_page_next_page_service__ = __webpack_require__("../../../../../src/app/services/next-page/next-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_course_pages_overview_map_overview_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_course_pages_point_to_point_map_point_to_point_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_course_pages_story_story_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_course_pages_success_success_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_course_pages_tree_map_tree_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-map/tree-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_plugins_tree_berlin_service__ = __webpack_require__("../../../../../src/app/services/plugins/tree-berlin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_course_pages_op_debate_op_debate_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/op-debate/op-debate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_course_pages_wheelmap_map_wheelmap_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_course_pages_line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_course_pages_chloropleth_map_chloropleth_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_course_pages_tree_dashboard_tree_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_course_pages_tree_development_tree_development_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-development/tree-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_course_pages_mundraub_map_mundraub_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_course_pages_berlin_besetzt_map_berlin_besetzt_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_course_pages_berlin_besetzt_dashboard_berlin_besetzt_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_intro_intro_component__ = __webpack_require__("../../../../../src/app/pages/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_mapbox_mapbox_service__ = __webpack_require__("../../../../../src/app/services/mapbox/mapbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_page_indicator_page_indicator_component__ = __webpack_require__("../../../../../src/app/components/page-indicator/page-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_course_pages_subjects_subjects_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_course_pages_iframe_iframe_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/iframe/iframe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_courses_overview_courses_overview_component__["a" /* CoursesOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_action_bar_action_bar_component__["a" /* ActionBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_course_detail_course_detail_component__["a" /* CourseDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_map_cell_map_cell_component__["a" /* MapCellComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_18__pages_course_pages_overview_map_overview_map_component__["a" /* OverviewMapComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_course_pages_point_to_point_map_point_to_point_map_component__["a" /* PointToPointMapComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_course_pages_story_story_component__["a" /* StoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_pages_success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_page_directive__["a" /* PageDirective */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_pages_tree_map_tree_map_component__["a" /* TreeMapComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_course_pages_op_debate_op_debate_component__["a" /* OpDebateComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_course_pages_wheelmap_map_wheelmap_map_component__["a" /* WheelmapMapComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_course_pages_line_chart_line_chart_component__["a" /* LineChartComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_course_pages_chloropleth_map_chloropleth_map_component__["a" /* ChloroplethMapComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_course_pages_tree_dashboard_tree_dashboard_component__["a" /* TreeDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_course_pages_tree_development_tree_development_component__["a" /* TreeDevelopmentComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_course_pages_mundraub_map_mundraub_map_component__["a" /* MundraubMapComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_course_pages_berlin_besetzt_map_berlin_besetzt_map_component__["a" /* BerlinBesetztMapComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_course_pages_berlin_besetzt_dashboard_berlin_besetzt_dashboard_component__["a" /* BerlinBesetztDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_page_indicator_page_indicator_component__["a" /* PageIndicatorComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_course_pages_subjects_subjects_component__["a" /* SubjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_course_pages_iframe_iframe_component__["a" /* IframeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__modules_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_mapbox_gl__["a" /* NgxMapboxGLModule */].forRoot({
                    accessToken: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapbox_key,
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_courses_courses_service__["a" /* CoursesService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }, __WEBPACK_IMPORTED_MODULE_17__services_next_page_next_page_service__["a" /* NextPageService */], __WEBPACK_IMPORTED_MODULE_24__services_plugins_tree_berlin_service__["a" /* TreeBerlinService */], __WEBPACK_IMPORTED_MODULE_36__services_mapbox_mapbox_service__["a" /* MapboxService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"bar\">\n  <button id=\"butLogo\" class=\"barButton\" role=\"button\" aria-label=\"toggleMenu\" (click)=\"toggleMenu()\" [hidden]=\"!showMenu\"></button>\n  <button id=\"goBack\" class=\"barButton\" aria-label=\"goBack\" (click)=\"goBack()\" [hidden]=\"!showBack\"></button>\n  <h1 class=\"bar__title\">{{name}}</h1>\n</header>\n<app-menu [@slideInOut]=\"menuState\"></app-menu>\n"

/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bar {\n  width: 100%;\n  height: 55px;\n  color: #FFF;\n  background: #3F51B5;\n  font-size: 20px;\n  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);\n  padding: 16px 16px 0 16px;\n  will-change: transform;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s, -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  z-index: 1000; }\n\n.bar .barButton {\n  width: 24px;\n  height: 24px;\n  margin-right: 16px;\n  text-indent: -30000px;\n  overflow: hidden;\n  opacity: 0.54;\n  -webkit-transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);\n  transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);\n  border: none;\n  outline: none;\n  cursor: pointer; }\n\n.bar .barButton:hover {\n  opacity: 1; }\n\n.bar #butRefresh {\n  background: url(/assets/images/ic_refresh_white_24px.svg) center center no-repeat; }\n\n.bar #butAdd {\n  background: url(/assets/images/ic_add_white_24px.svg) center center no-repeat; }\n\n.bar #goBack {\n  background: url(/assets/images/ic_keyboard_backspace_white_24px.svg) center center no-repeat; }\n\n.bar #butLogo {\n  width: 3em;\n  background: url(/assets/images/logo.png) center center no-repeat; }\n\n.bar__title {\n  font-weight: 400;\n  font-size: 20px;\n  margin: 0;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(locaction) {
        this.locaction = locaction;
        this.menuState = 'out';
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    ActionBarComponent.prototype.goBack = function () {
        this.locaction.back();
    };
    ActionBarComponent.prototype.toggleMenu = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ActionBarComponent.prototype, "showMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ActionBarComponent.prototype, "showBack", void 0);
    ActionBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-action-bar',
            template: __webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translate3d(-100%,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/overview-map/{{course.id}}\">\n  <div class=\"card\">\n    {{course.name}} - {{course.location}}\n  </div>\n</a>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  padding: 16px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n  border-radius: 2px;\n  margin: 16px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_course__ = __webpack_require__("../../../../../src/app/model/course.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_course__["a" /* Course */])
    ], CardComponent.prototype, "course", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/map-cell/map-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/map-cell/map-cell.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map-cell/map-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapCellComponent = /** @class */ (function () {
    function MapCellComponent() {
    }
    MapCellComponent.prototype.ngOnInit = function () {
    };
    MapCellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map-cell',
            template: __webpack_require__("../../../../../src/app/components/map-cell/map-cell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/map-cell/map-cell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapCellComponent);
    return MapCellComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li><a routerLink=\"/intro\">Datenspaziergang</a></li>\n    <li>Touren\n      <ul class=\"inner-menu\">\n        <li>1. Tour</li>\n        <li>2. Tour</li>\n      </ul>\n    </li>\n    <li><a routerLink=\"/feedback\">Feedback</a></li>\n    <li><a routerLink=\"/impressum\">Impressum</a></li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 55px;\n  left: 0;\n  bottom: 0;\n  width: 250px;\n  z-index: 40;\n  background: #1a2580;\n  color: #fff; }\n\nul {\n  font-size: 18px;\n  line-height: 3;\n  font-weight: 400;\n  padding-top: 50px;\n  list-style: none; }\n\nul.inner-menu {\n  padding: 0 1em 0 1.5em;\n  word-break: break-all; }\n\na, a:hover, a:visited, a:active, a:focus {\n  color: #fff;\n  text-decoration: none; }\n\na:hover {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-indicator/page-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <span class=\"indicator\"></span>\n  <span class=\"indicator\"></span>\n  <span class=\"indicator active\"></span>\n  <span class=\"indicator\"></span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/page-indicator/page-indicator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".indicator {\n  height: 10px;\n  width: 25px;\n  background-color: black;\n  border-radius: 50%;\n  display: inline-block; }\n\n.indicator:hover {\n  cursor: pointer; }\n\n:host {\n  position: absolute;\n  bottom: 50px;\n  right: 50px; }\n\n.active {\n  background-color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-indicator/page-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageIndicatorComponent = /** @class */ (function () {
    function PageIndicatorComponent() {
    }
    PageIndicatorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], PageIndicatorComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PageIndicatorComponent.prototype, "active", void 0);
    PageIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-indicator',
            template: __webpack_require__("../../../../../src/app/components/page-indicator/page-indicator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-indicator/page-indicator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageIndicatorComponent);
    return PageIndicatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/page.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageDirective = /** @class */ (function () {
    function PageDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    PageDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appPage]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */]])
    ], PageDirective);
    return PageDirective;
}());



/***/ }),

/***/ "../../../../../src/app/model/course.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_courses_overview_courses_overview_component__ = __webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_course_pages_overview_map_overview_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_course_pages_point_to_point_map_point_to_point_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_course_pages_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_course_pages_story_story_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_pages_success_success_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_course_pages_tree_map_tree_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-map/tree-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_course_pages_op_debate_op_debate_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/op-debate/op-debate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_course_pages_wheelmap_map_wheelmap_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_course_pages_line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_course_pages_chloropleth_map_chloropleth_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_course_pages_tree_dashboard_tree_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_course_pages_tree_development_tree_development_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/tree-development/tree-development.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_course_pages_mundraub_map_mundraub_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_course_pages_berlin_besetzt_map_berlin_besetzt_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_course_pages_berlin_besetzt_dashboard_berlin_besetzt_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_intro_intro_component__ = __webpack_require__("../../../../../src/app/pages/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_course_pages_subjects_subjects_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/subjects/subjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_iframe_iframe_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/iframe/iframe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_19__pages_intro_intro_component__["a" /* IntroComponent */] },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_2__pages_courses_overview_courses_overview_component__["a" /* CoursesOverviewComponent */] },
    { path: 'course/:id', component: __WEBPACK_IMPORTED_MODULE_3__pages_course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'overview-map/:course', component: __WEBPACK_IMPORTED_MODULE_4__pages_course_pages_overview_map_overview_map_component__["a" /* OverviewMapComponent */] },
    { path: 'point-to-point/:course/:station', component: __WEBPACK_IMPORTED_MODULE_5__pages_course_pages_point_to_point_map_point_to_point_map_component__["a" /* PointToPointMapComponent */] },
    { path: 'subjects/:course/:station', component: __WEBPACK_IMPORTED_MODULE_20__pages_course_pages_subjects_subjects_component__["a" /* SubjectsComponent */] },
    { path: 'quiz/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_6__pages_course_pages_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'story/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_7__pages_course_pages_story_story_component__["a" /* StoryComponent */], pathMatch: 'full' },
    { path: 'success/:course', component: __WEBPACK_IMPORTED_MODULE_8__pages_course_pages_success_success_component__["a" /* SuccessComponent */] },
    { path: 'iframe/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_iframe_iframe_component__["a" /* IframeComponent */] },
    { path: 'berlin-tree/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_9__pages_course_pages_tree_map_tree_map_component__["a" /* TreeMapComponent */] },
    { path: 'op-debate/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_10__pages_course_pages_op_debate_op_debate_component__["a" /* OpDebateComponent */] },
    { path: 'wheelmap-map/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_11__pages_course_pages_wheelmap_map_wheelmap_map_component__["a" /* WheelmapMapComponent */] },
    { path: 'line-chart/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_12__pages_course_pages_line_chart_line_chart_component__["a" /* LineChartComponent */] },
    { path: 'chloropleth-map/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_13__pages_course_pages_chloropleth_map_chloropleth_map_component__["a" /* ChloroplethMapComponent */] },
    { path: 'tree-dashboard/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_14__pages_course_pages_tree_dashboard_tree_dashboard_component__["a" /* TreeDashboardComponent */] },
    { path: 'tree-development/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_15__pages_course_pages_tree_development_tree_development_component__["a" /* TreeDevelopmentComponent */] },
    { path: 'mundraub-map/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_16__pages_course_pages_mundraub_map_mundraub_map_component__["a" /* MundraubMapComponent */] },
    { path: 'berlin-besetzt-map/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_17__pages_course_pages_berlin_besetzt_map_berlin_besetzt_map_component__["a" /* BerlinBesetztMapComponent */] },
    { path: 'berlin-besetzt-dashboard/:course/:station/:subject/:page', component: __WEBPACK_IMPORTED_MODULE_18__pages_course_pages_berlin_besetzt_dashboard_berlin_besetzt_dashboard_component__["a" /* BerlinBesetztDashboardComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-detail/course-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar  [name]=\"course.name\"></app-action-bar>\n  <div class=\"main\">\n    <div class=\"detail\">\n      <img src=\"{{course.preview_image}}\" alt=\"\">\n      <p>{{course.description}}</p>\n      <button class=\"button\" routerLink=\"{{entryLink}}\">Take the tour!</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-detail/course-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-top: 60px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.detail {\n  padding: 16px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n  border-radius: 2px;\n  margin: 16px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.detail img {\n  max-width: 100%; }\n\n.button {\n  background-color: #555555;\n  color: white;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-detail/course-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetailComponent = /** @class */ (function () {
    function CourseDetailComponent(route, coursesService) {
        this.route = route;
        this.coursesService = coursesService;
        this.title = "Detail";
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(id).subscribe(function (course) {
            console.log('fetched course!!!!');
            console.log(course);
            _this.course = course;
            _this.entryLink = "/overview-map/" + _this.course.id;
        });
    };
    CourseDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course-detail',
            template: __webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  berlin-besetzt-dashboard works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerlinBesetztDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BerlinBesetztDashboardComponent = /** @class */ (function () {
    function BerlinBesetztDashboardComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    BerlinBesetztDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    BerlinBesetztDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-berlin-besetzt-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-dashboard/berlin-besetzt-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BerlinBesetztDashboardComponent);
    return BerlinBesetztDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  berlin-besetzt-map works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerlinBesetztMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BerlinBesetztMapComponent = /** @class */ (function () {
    function BerlinBesetztMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    BerlinBesetztMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    BerlinBesetztMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-berlin-besetzt-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/berlin-besetzt-map/berlin-besetzt-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], BerlinBesetztMapComponent);
    return BerlinBesetztMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"title\">\n  <app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n  <a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px; z-index: 1000;\" routerLink=\"{{nextLink}}\">Weiter</a>\n</div>\n\n<div class=\"map-topics\">\n  <h3>Kategorien</h3>\n  <button\n    *ngFor=\"let k of Object.keys(mapKeysToLayer)\"\n    [value]=\"k\"\n    (click)=\"moveLayerToTop($event)\">{{mapKeysToLayer[k]}}</button>\n</div>\n\n<div class=\"map-info\">\n  <h3>{{mapData['name']}}</h3>\n  <div *ngIf=\"activeMap\">{{mapKeysToLayer[activeMap]}} {{mapData[mapKeysToLayer[activeMap]]}}</div>\n</div>\n\n<div class=\"map-legend\">\n  <div *ngFor=\"let l of legend\"><span class=\"legend-color\" [style.background]=\"l[1]\"></span>{{l[0]}}</div>\n</div>\n\n<mgl-map\n  [center]=\"mapOption.center\"\n  [zoom]=\"mapOption.zoom\"\n  [style]=\"mapOption.style\"\n  (load)=\"onLoad($event)\">\n  <mgl-geojson-source\n    id=\"berlin\"\n    [data]=\"mapOption.sources.berlinBorders\">\n  </mgl-geojson-source>\n  <mgl-geojson-source\n    id=\"schools\"\n    [data]=\"mapOption.sources.schoolActivities\">\n  </mgl-geojson-source>\n\n  <mgl-layer\n    id=\"base\"\n    type=\"fill\"\n    source=\"schools\"\n    [paint]='{\n    \"fill-opacity\": 0.0}'\n    (mouseMove)=\"activateHoverOn($event)\"\n    (mouseLeave)=\"disableHover()\">\n  </mgl-layer>\n\n  <mgl-layer\n    id=\"outline\"\n    type=\"line\"\n    source=\"berlin\"\n    [paint]='{\n    \"line-color\": \"#333\",\n    \"line-width\": 2\n    }'>\n  </mgl-layer>\n  <mgl-layer\n    id=\"hover\"\n    type=\"line\"\n    source=\"berlin\"\n    [paint]='{\n    \"line-color\": \"#333\",\n    \"line-width\": 6\n    }'\n    [filter]=\"hoverFilter\">\n  </mgl-layer>\n</mgl-map>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-topics {\n  position: absolute;\n  bottom: 5em;\n  left: 5em;\n  z-index: 1;\n  background: #f1f1f1;\n  padding: 2em;\n  width: 15em; }\n\n.map-info {\n  position: absolute;\n  top: 5em;\n  right: 5em;\n  z-index: 1;\n  background: #f1f1f1;\n  padding: 2em; }\n\n.map-legend {\n  position: absolute;\n  bottom: 5em;\n  right: 5em;\n  z-index: 1;\n  background: #f1f1f1;\n  padding: 2em; }\n\n.legend-color {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  margin-right: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChloroplethMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChloroplethMapComponent = /** @class */ (function () {
    function ChloroplethMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
        this.Object = Object; // workaround to access `Object` in template
        this.defaultText = "Wähle eine Kategorie und hover über einen Bezirk";
        this.mapData = { name: this.defaultText };
        this.legend = [
            ['0-5', '#FFEDA0'],
            ['5-15', '#FED976'],
            ['15-25', '#FEB24C'],
            ['25-40', '#FD8D3C'],
            ['40-55', '#FC4E2A'],
            ['55-75', '#E31A1C'],
            ['75-90', '#BD0026'],
            ['90-110', '#800026'],
            ['110+', '#420014']
        ];
        this.mapKeysToLayer = {
            society: 'Gesellschaft / Partizipation',
            craft: 'Handwerk',
            culture: 'Kunst / Kultur',
            literature: 'Literatur / Medien',
            music: 'Musik / Tanz',
            stem: 'Naturwissenschaft / Technik',
            sports: 'Sport',
            language: 'Sprachen',
            environment: 'Umwelt'
        };
        this.mapOption = {
            center: [13.4190634, 52.4945314],
            zoom: [10],
            style: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapboxTiles.chloropleth,
            sources: {
                berlinBorders: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].geoJsonSources.berlin,
                schoolActivities: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].geoJsonSources.schoolActivities
            }
        };
        this.hoverFilter = ['==', 'name', ''];
    }
    ChloroplethMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            _this.title = page.name;
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    ChloroplethMapComponent.prototype.activateHoverOn = function (evt) {
        this.mapData = evt.features[0].properties;
        this.hoverFilter = ['==', 'name', evt.features[0].properties.name];
    };
    ChloroplethMapComponent.prototype.disableHover = function () {
        this.mapData = {};
        this.mapData['name'] = this.defaultText;
        this.hoverFilter = ['==', 'name', ''];
    };
    ChloroplethMapComponent.prototype.moveLayerToTop = function (evt) {
        var mapId = evt.target.value;
        this.activeMap = mapId;
        var layerId = mapId.toUpperCase();
        this.theMapStyles = this.theMapStyles.moveLayer(layerId, 'outline');
    };
    ChloroplethMapComponent.prototype.onLoad = function (evt) {
        this.theMapStyles = evt;
    };
    ChloroplethMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chloropleth-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/chloropleth-map/chloropleth-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ChloroplethMapComponent);
    return ChloroplethMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/iframe/iframe.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n<div class=\"container\" [innerHTML]=\"text | safeHtml\"></div>\n<div class=\"wrapper-window\">\n  <iframe [src]=\"link\" frameborder=\"0\" scrolling=\"yes\"></iframe>\n</div>\n<a class=\"btn\" routerLink=\"{{nextLink}}\">Weiter</a>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/iframe/iframe.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper-window {\n  margin: 10vh auto 0 auto;\n  border: 5px solid green;\n  height: 60vh;\n  width: 80vh; }\n\niframe {\n  height: 100%;\n  width: 100%;\n  background-color: white; }\n\n.container {\n  margin: 100px 10vh 0 10vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/iframe/iframe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IframeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IframeComponent = /** @class */ (function () {
    function IframeComponent(coursesService, route, sanitizer) {
        this.coursesService = coursesService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    IframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var course_id = +params['course'];
            var station_id = +params['station'];
            var subject_id = +params['subject'];
            var page_id = +params['page'];
            _this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
                _this.link = _this.sanitizer.bypassSecurityTrustResourceUrl(page.link);
                _this.text = page.content;
                _this.title = page.name;
                _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                    _this.nextLink = nextPage;
                });
            });
        });
    };
    IframeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-iframe',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/iframe/iframe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/iframe/iframe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  line-chart works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/line-chart/line-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    LineChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-line-chart',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/line-chart/line-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/line-chart/line-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mundraub-map works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MundraubMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MundraubMapComponent = /** @class */ (function () {
    function MundraubMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    MundraubMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    MundraubMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mundraub-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/mundraub-map/mundraub-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MundraubMapComponent);
    return MundraubMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/op-debate/op-debate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  op-debate works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/op-debate/op-debate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/op-debate/op-debate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpDebateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpDebateComponent = /** @class */ (function () {
    function OpDebateComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    OpDebateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    OpDebateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-op-debate',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/op-debate/op-debate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/op-debate/op-debate.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], OpDebateComponent);
    return OpDebateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar [name]=\"course.name\" [showMenu]=\"true\"></app-action-bar>\n  <div class=\"wrapper\" *ngIf=\"stations\">\n    <mgl-map\n      [center]=\"mapOptions.center\"\n      [zoom]=\"mapOptions.zoom\"\n      [style]=\"mapOptions.style\"\n      [interactive]=\"false\"\n      [pitch]=\"0\">\n      <mgl-layer\n        id=\"linelayer\"\n        type=\"line\"\n        [source]=\"{\n        'type': 'geojson',\n        'data': {\n          'type': 'Feature',\n          'properties': {},\n          'geometry': {\n            'type': 'LineString',\n            'coordinates': line\n          }\n        }\n        }\"\n        [layout]=\"{\n        'line-join': 'round',\n        'line-cap': 'round'\n        }\"\n        [paint]=\"{\n        'line-color': '#888',\n        'line-width': 8\n        }\">\n      </mgl-layer>\n      <mgl-marker\n        *ngFor=\"let station of stations\"\n        [lngLat]=\"[station.position.lon, station.position.lat]\"\n      >{{station.id}} {{station.name}}\n      </mgl-marker>\n    </mgl-map>\n\n    <a class=\"btn\" style=\"position: absolute; bottom: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Los gehts</a>\n    <!--<app-waypoint-info [course]=\"course\" [waypointId]=\"activeWaypoint\"></app-waypoint-info>-->\n    <div class=\"box\">\n      <p>{{course.description}}</p>\n    </div>\n  </div>\n</div>\n<div class=\"wrapper\">\n  <!--<div class=\"mymap\" id=\"mymap\"></div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n  position: absolute;\n  top: 80px;\n  left: 60px;\n  min-height: 30vh;\n  width: 50vh;\n  background-color: white;\n  border: 1px solid black;\n  padding: 30px;\n  max-height: 30vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  z-index: 30; }\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 5px; }\n\n::-webkit-scrollbar-thumb {\n  /*border-radius: 5px;*/\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turf_turf__ = __webpack_require__("../../../../@turf/turf/turf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turf_turf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__turf_turf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewMapComponent = /** @class */ (function () {
    function OverviewMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
        this.image = '/assets/images/pin.jpeg';
        this.line = [[13.390497, 52.518321, 49], [13.390521, 52.51815, 48], [13.390688, 52.517271, 43.1], [13.39068, 52.51723, 42.7], [13.390703, 52.517122, 42.3], [13.392561, 52.517235, 39.4], [13.392584, 52.517118, 39.3], [13.393054, 52.517149, 39.1], [13.393172, 52.517192, 39.2], [13.393289, 52.517222, 39.3], [13.393364, 52.517227, 39.3], [13.393385, 52.517089, 39.3], [13.394184, 52.517141, 39], [13.394233, 52.516831, 38.6], [13.394358, 52.516045, 36.3], [13.394367, 52.515986, 36.2], [13.394171, 52.515955, 36.2], [13.393571, 52.515912, 36.2], [13.393495, 52.515906, 36.1], [13.393164, 52.515884, 36.4], [13.393034, 52.515888, 36.5], [13.392887, 52.51588, 36.6], [13.392927, 52.515624, 37], [13.393033, 52.514997, 38.9], [13.393129, 52.514432, 41], [13.393179, 52.514104, 41.9], [13.394314, 52.514145, 43.4], [13.393179, 52.514104, 44.3], [13.393092, 52.514098, 44.2], [13.392478, 52.514057, 43.8], [13.391333, 52.513979, 43.6], [13.391248, 52.513974, 43.5], [13.391388, 52.513118, 43.2], [13.391442, 52.512801, 43.4], [13.391388, 52.513118, 43.5], [13.391248, 52.513974, 43.5], [13.390523, 52.513928, 43.6], [13.389337, 52.513854, 43.3], [13.388208, 52.513782, 42.9], [13.386962, 52.513702, 42.7], [13.386368, 52.51367, 42.4], [13.386293, 52.514122, 41.9], [13.386209, 52.51457, 41.4], [13.385703, 52.51453, 40.8], [13.386209, 52.51457, 39], [13.386158, 52.514868, 39], [13.38612, 52.515087, 38.8], [13.386106, 52.515165, 38.8], [13.386057, 52.515451, 38.6], [13.387619, 52.515556, 38.8], [13.387547, 52.516025, 39.2], [13.387619, 52.515556, 40.5], [13.386057, 52.515451, 39.5], [13.385972, 52.515896, 39.2], [13.385894, 52.516325, 38.7], [13.385854, 52.516522, 38.5], [13.385846, 52.51656, 38.4], [13.385821, 52.516671, 38.2], [13.386007, 52.516685, 38.3], [13.385973, 52.516886, 38.5], [13.385958, 52.516976, 38.6], [13.386016, 52.51698, 38.7], [13.387006, 52.517049, 39.9], [13.388066, 52.517123, 44], [13.388057, 52.517173, 44.1], [13.388046, 52.517231, 44.2], [13.38802, 52.517373, 44.3], [13.38799, 52.517529, 44.3], [13.387968, 52.517647, 44.2], [13.38794, 52.517799, 44.2], [13.387919, 52.517912, 44.2], [13.387908, 52.517983, 44.2], [13.388643, 52.518027, 44.5], [13.388544, 52.518716, 43], [13.388611, 52.518785, 42.5], [13.388625, 52.518882, 41.9], [13.388592, 52.519069, 40.8], [13.388622, 52.51907, 40.3], [13.388627, 52.519075, 39.8], [13.388627, 52.519075, 39.3], [13.388627, 52.519075, 34], [13.388622, 52.51907, 34], [13.388592, 52.519069, 34], [13.388625, 52.518882, 34], [13.388611, 52.518785, 34], [13.388544, 52.518716, 34], [13.388855, 52.518711, 34], [13.390091, 52.518793, 38.3], [13.390236, 52.518824, 38.9], [13.390371, 52.518879, 39.5], [13.390416, 52.518908, 40.4], [13.390419, 52.518887, 41.2], [13.390497, 52.518321, 46]];
        this.lineId = 'line-0';
        this.activeWaypoint = 0;
        this.mapOptions = {
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [13.390497, 52.517221],
            container: "map0",
            zoom: [14],
            hash: false,
            interactive: true,
            index: 0,
            bearingSnap: 7,
            pitchWithRotate: true,
            logoPosition: 'bottom-left',
            classes: [],
            attributionControl: true,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            refreshExpiredTiles: true,
            maxBounds: undefined,
            scrollZoom: true,
            boxZoom: true,
            dragRotate: true,
            dragPan: true,
            keyboard: true,
            doubleClickZoom: true,
            touchZoomRotate: true,
            trackResize: true,
            bearing: 0,
            pitch: 0,
            renderWorldCopies: true
        };
    }
    OverviewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.course = course;
            _this.stations = _this.course.stations;
            var features = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["featureCollection"](_this.stations.map(function (station) { return __WEBPACK_IMPORTED_MODULE_3__turf_turf__["point"]([station.position.lon, station.position.lat]); }));
            var center = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["center"](features);
            center = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["transformTranslate"](center, -0.5, 90);
            _this.line = _this.stations.reduce(function (prev, curr) { console.log(prev); prev.push([curr.position.lon, curr.position.lat]); return prev; }, []);
            // console.log();
            _this.mapOptions.center = center.geometry.coordinates;
            _this.nextLink = "/point-to-point/" + course_id + "/" + _this.course.entry;
        });
    };
    OverviewMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], OverviewMapComponent);
    return OverviewMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"station\">\n  <app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n\n  <mgl-map\n    [center]=\"mapOptions.center\"\n    [zoom]=\"mapOptions.zoom\"\n    [style]=\"mapOptions.style\">\n    <mgl-layer\n      *ngIf=\"locationMarker.length > 0\"\n      id=\"linelayer\"\n      type=\"line\"\n      [source]=\"{\n        'type': 'geojson',\n        'data': {\n          'type': 'Feature',\n          'properties': {},\n          'geometry': {\n            'type': 'LineString',\n            'coordinates': [mapOptions.center, locationMarker]\n           }\n        }\n        }\"\n      [layout]=\"{\n        'line-join': 'round',\n        'line-cap': 'round'\n        }\"\n      [paint]=\"{\n        'line-color': '#888',\n        'line-width': 8\n        }\"\n    ></mgl-layer>\n    <mgl-marker\n      [lngLat]=\"mapOptions.center\">\n      <div class=\"marker\">{{station.name}}</div>\n    </mgl-marker>\n    <mgl-marker *ngIf=\"locationMarker.length > 0\"\n                [lngLat]=\"locationMarker\">\n      <div class=\"marker\">DU</div>\n    </mgl-marker>\n  </mgl-map>\n\n  <a class=\"btn\" style=\"position: absolute; bottom: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Angekommen</a>\n  <div class=\"box\">\n    <p [innerHTML]=\"course.description | safeHtml\"></p>\n  </div>\n  <app-page-indicator></app-page-indicator>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n  position: absolute;\n  top: 80px;\n  left: 60px;\n  min-height: 30vh;\n  width: 50vh;\n  background-color: white;\n  border: 1px solid black;\n  padding: 30px;\n  max-height: 40vh;\n  overflow-y: scroll; }\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 5px; }\n\n::-webkit-scrollbar-thumb {\n  /*border-radius: 5px;*/\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointToPointMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mapbox_mapbox_service__ = __webpack_require__("../../../../../src/app/services/mapbox/mapbox.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PointToPointMapComponent = /** @class */ (function () {
    function PointToPointMapComponent(coursesService, route, mapboxService) {
        this.coursesService = coursesService;
        this.route = route;
        this.mapboxService = mapboxService;
        this.image = '/assets/images/pin.jpeg';
        this.locationMarker = [];
        this.lineData = [
            [13.419347, 52.497136],
            [13.419111, 52.498912],
            [13.423489, 52.499173]
        ];
        this.mapOptions = {
            style: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapboxTiles.street,
            center: [13.390497, 52.517221],
            container: "map0",
            zoom: [15],
            hash: false,
            interactive: true,
            index: 0,
            bearingSnap: 7,
            pitchWithRotate: true,
            logoPosition: 'bottom-left',
            classes: [],
            attributionControl: true,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            refreshExpiredTiles: true,
            maxBounds: undefined,
            scrollZoom: true,
            boxZoom: true,
            dragRotate: true,
            dragPan: true,
            keyboard: true,
            doubleClickZoom: true,
            touchZoomRotate: true,
            trackResize: true,
            bearing: 0,
            pitch: 0,
            renderWorldCopies: true
        };
    }
    PointToPointMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        this.mapboxService.getRoute().subscribe(function (res) {
            console.log(res);
        });
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.course = course;
            _this.station = _this.course.stations.find(function (station) { return station.id === station_id; });
            _this.mapOptions.center = [_this.station.position.lon, _this.station.position.lat];
            console.log(_this.station);
            _this.title = course.name + ": " + _this.station.name;
            if (navigator.geolocation) {
                console.log('start requesting geolocation');
                navigator.geolocation.watchPosition(function (current_location) {
                    console.log(current_location);
                    // this.location = {lon: current_location.coords.longitude, lat: current_location.coords.latitude};
                    _this.locationMarker = [current_location.coords.longitude, current_location.coords.latitude];
                    console.log(_this.locationMarker);
                    // this.line = [[this.station.position.lon, this.station.position.lat], [this.location.lon, this.location.lat]];
                }, function (error) {
                    console.log(error, " did not get user permission");
                });
            }
            else {
                console.log('no navigator object found');
            }
            // const firstpage = this.station.pages.find(page => page.id === this.station.entry);
            // this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
            _this.nextLink = "/subjects/" + _this.course.id + "/" + _this.station.id;
        });
    };
    PointToPointMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-point-to-point-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_mapbox_mapbox_service__["a" /* MapboxService */]])
    ], PointToPointMapComponent);
    return PointToPointMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"title\">\n  <app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n  <h1 style=\"text-align: center; padding-top: 100px;\">{{question}}</h1>\n  <ul>\n    <li class=\"button\" *ngFor=\"let answer of answers; let i = index\" (click)=\"sendanswer(i)\">{{answer}}</li>\n  </ul>\n  <p *ngIf=\"firstguess && correct\">{{correct_message}}</p>\n  <p *ngIf=\"firstguess && !correct\">{{wrong_message}}</p>\n  <button class=\"button\" style=\"margin-top: 10px\" routerLink=\"{{nextLink}}\">Next</button>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/quiz/quiz.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  background-color: #555555;\n  color: white;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px; }\n\n.button:hover {\n  color: white;\n  background-color: #008CBA; }\n\nli {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n\nul {\n  margin: auto;\n  text-align: center;\n  width: 80%;\n  padding: 0; }\n\nbutton {\n  margin: 10px auto;\n  text-align: center !important;\n  display: block !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = /** @class */ (function () {
    function QuizComponent(coursesService, route) {
        var _this = this;
        this.coursesService = coursesService;
        this.route = route;
        this.correct = false;
        this.firstguess = false;
        this.correct_message = 'Glückwunsch';
        this.wrong_message = 'Falsch';
        route.params.subscribe(function (val) {
            var course_id = +_this.route.snapshot.paramMap.get('course');
            var station_id = +_this.route.snapshot.paramMap.get('station');
            var subject_id = +_this.route.snapshot.paramMap.get('subject');
            var page_id = +_this.route.snapshot.paramMap.get('page');
            _this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
                _this.title = page.name;
                _this.question = page.question;
                _this.answers = page.answers;
                _this.correct_answer = page.correct;
                _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                    _this.nextLink = nextPage;
                });
            });
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.sendanswer = function (answer) {
        this.firstguess = true;
        console.log("clicked option " + answer);
        this.correct = answer === this.correct_answer;
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar  [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n<div class=\"wrapper\" *ngIf=\"story\">\n  <div class=\"wrapper\" [style.background-image]=\"image\" style=\"height: 100vh; background-size: cover\">\n    <div class=\"detail\">\n      <div class=\"description\" [innerHTML]=\"story.content | safeHtml\"></div>\n      <a class=\"btn\" routerLink=\"{{nextLink}}\">Weiter</a>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/story/story.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.45)), to(rgba(0, 0, 0, 0.45)));\n  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));\n  height: 100%; }\n\n.description {\n  color: white;\n  padding: 80px 10% 10% 10%;\n  max-width: 50vw; }\n\n.btn {\n  margin-left: 10%;\n  margin-top: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoryComponent = /** @class */ (function () {
    function StoryComponent(coursesService, route, sanitizer) {
        this.coursesService = coursesService;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var course_id = +params['course'];
            var station_id = +params['station'];
            var subject_id = +params['subject'];
            var page_id = +params['page'];
            _this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
                _this.title = page.name;
                _this.story = page;
                _this.image = _this.sanitizer.bypassSecurityTrustStyle("url(" + page.img + ")");
                _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                    _this.nextLink = nextPage;
                });
            });
        });
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/subjects/subjects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"station\">\n  <app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n\n  <div class=\"swipeable-content\" [@swiping]=\"swipeState\">\n    <mgl-map\n      [center]=\"mapOptions.center\"\n      [zoom]=\"mapOptions.zoom\"\n      [style]=\"mapOptions.style\">\n\n      <mgl-marker\n        [lngLat]=\"mapOptions.center\">\n        <div class=\"marker\">{{station.name}}</div>\n      </mgl-marker>\n    </mgl-map>\n\n    <div class=\"box-container\">\n      <div class=\"box\" *ngFor=\"let subject of station.subjects\" routerLink=\"{{subject['link']}}\">\n        <h1>{{subject.name}}</h1>\n        <p>{{subject.description}}</p>\n      </div>\n      <a class=\"btn\" routerLink=\"{{nextLink}}\">zur nächsten Station</a>\n      <div class=\"swipe-helper\" (click)=\"toggleSwipeState()\"></div>\n    </div>\n  </div>\n\n  <app-page-indicator></app-page-indicator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/subjects/subjects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box {\n  width: auto;\n  background-color: white;\n  border: 1px solid black;\n  padding: 30px;\n  margin: 10px 0; }\n\n/*::-webkit-scrollbar {*/\n\n/*-webkit-appearance: none;*/\n\n/*width: 5px;*/\n\n/*}*/\n\n/*::-webkit-scrollbar-thumb {*/\n\n/*!*border-radius: 5px;*!*/\n\n/*background-color: rgba(0, 0, 0, .5);*/\n\n/*-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);*/\n\n/*}*/\n\n.box:hover {\n  cursor: pointer; }\n\napp-action-bar {\n  position: absolute;\n  width: 100%; }\n\nmgl-map {\n  width: 100vw; }\n\n@media (max-width: 800px) {\n    mgl-map {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; } }\n\n@media (max-width: 800px) {\n  .swipeable-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 200%; } }\n\n.box-container {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  z-index: 30; }\n\n@media (max-width: 800px) {\n    .box-container {\n      width: 90vw;\n      background: pink;\n      padding: 5em 3em; } }\n\n@media (min-width: 801px) {\n    .box-container {\n      position: absolute;\n      top: 80px;\n      left: 60px;\n      height: 90vh;\n      width: 50vh;\n      background: transparent;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      z-index: 30; } }\n\n.swipe-helper {\n  background-color: cornflowerblue;\n  width: 15vw;\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 85vw;\n  opacity: 0.5; }\n\n@media (min-width: 801px) {\n    .swipe-helper {\n      display: none; } }\n\n.btn {\n  margin: 10px 0;\n  display: block;\n  text-align: center; }\n\n.active {\n  background-color: lightblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/subjects/subjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mapbox_mapbox_service__ = __webpack_require__("../../../../../src/app/services/mapbox/mapbox.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubjectsComponent = /** @class */ (function () {
    function SubjectsComponent(coursesService, route, mapboxService) {
        this.coursesService = coursesService;
        this.route = route;
        this.mapboxService = mapboxService;
        this.swipeState = 'left';
        this.lineData = [
            [13.419347, 52.497136],
            [13.419111, 52.498912],
            [13.423489, 52.499173]
        ];
        this.mapOptions = {
            style: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapboxTiles.street,
            center: [13.390497, 52.517221],
            container: "map0",
            zoom: [15],
            hash: false,
            interactive: true,
            index: 0,
            bearingSnap: 7,
            pitchWithRotate: true,
            logoPosition: 'bottom-left',
            classes: [],
            attributionControl: true,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            refreshExpiredTiles: true,
            maxBounds: undefined,
            scrollZoom: true,
            boxZoom: true,
            dragRotate: true,
            dragPan: true,
            keyboard: true,
            doubleClickZoom: true,
            touchZoomRotate: true,
            trackResize: true,
            bearing: 0,
            pitch: 0,
            renderWorldCopies: true
        };
    }
    SubjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        this.mapboxService.getRoute().subscribe(function (res) {
            console.log(res);
        });
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.course = course;
            _this.station = _this.course.stations.find(function (station) { return station.id === station_id; });
            _this.station.subjects = _this.station.subjects.map(function (subject) {
                var firstpage = subject.pages.find(function (page) { return page.id === subject.entry; });
                subject['link'] = "/" + firstpage['type'] + "/" + _this.course.id + "/" + _this.station.id + "/" + subject.id + "/" + firstpage.id;
                return subject;
            });
            _this.mapOptions.center = [_this.station.position.lon, _this.station.position.lat];
            console.log(_this.station);
            _this.title = course.name + ": " + _this.station.name;
            //
            // this.nextLink = `/${firstpage['type']}/${this.course.id}/${this.station.id}/${firstpage.id}`;
            _this.coursesService.getNextStationLink(course_id, station_id).subscribe(function (nextStation) {
                _this.nextLink = nextStation;
            });
            // this.nextLink = `/subjects/${this.course.id}/${this.station.id}`;
        });
    };
    SubjectsComponent.prototype.toggleSwipeState = function () {
        console.log('hey');
        this.swipeState = this.swipeState === 'left' ? 'right' : 'left';
    };
    SubjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subjects',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/subjects/subjects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/subjects/subjects.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('swiping', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('left', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'translate3d(-43%, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('left => right', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('200ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('right => left', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('200ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_mapbox_mapbox_service__["a" /* MapboxService */]])
    ], SubjectsComponent);
    return SubjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar  [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n<img style=\"max-width: 100%\" src=\"/assets/images/success.svg\" alt=\"\">\n<h3 style=\"text-align: center; padding: 10px 5em\">{{message}}</h3>\n<button class=\"btn\" style=\"display: block; margin: auto\" routerLink=\"/overview\">Zurück zu allen Spaziergängen</button>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
        this.message = "Herzlichen Glückwunsch, besuchen uns auf datenschule.de für unsere Workshops";
        this.title = "Abschluss";
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tree-dashboard works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeDashboardComponent = /** @class */ (function () {
    function TreeDashboardComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    TreeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    TreeDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/tree-dashboard/tree-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TreeDashboardComponent);
    return TreeDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-development/tree-development.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tree-development works!\n  <button routerLink=\"{{nextLink}}\">Weiter</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-development/tree-development.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-development/tree-development.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDevelopmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreeDevelopmentComponent = /** @class */ (function () {
    function TreeDevelopmentComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
    }
    TreeDevelopmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        var page_id = +this.route.snapshot.paramMap.get('page');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    TreeDevelopmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-development',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/tree-development/tree-development.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/tree-development/tree-development.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TreeDevelopmentComponent);
    return TreeDevelopmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-map/tree-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"station\">\n  <app-action-bar  [name]=\"station.title\" [showBack]=\"true\"></app-action-bar>\n  <div class=\"wrapper\">\n    <mgl-map\n      [zoom]=\"[mapOptions.zoom]\"\n      [center]=\"mapOptions.center\"\n      [style]=\"mapOptions.style\">\n      <mgl-marker\n        *ngFor=\"let point of trees\"\n        [lngLat]=\"[ point.lat, point.lon ]\"\n        (click)=\"treeClick($event)\"></mgl-marker>\n    </mgl-map>\n  </div>\n  <a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Los gehts</a>\n  <!--<app-waypoint-info [course]=\"course\" [waypointId]=\"activeWaypoint\"></app-waypoint-info>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-map/tree-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".marker:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/tree-map/tree-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_plugins_tree_berlin_service__ = __webpack_require__("../../../../../src/app/services/plugins/tree-berlin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeMapComponent = /** @class */ (function () {
    function TreeMapComponent(treeService, coursesService, route) {
        this.treeService = treeService;
        this.coursesService = coursesService;
        this.route = route;
        this.image = '/assets/images/pin.jpeg';
        this.mapOptions = {
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [13.437747, 52.496506],
            container: "map0",
            zoom: 15,
            hash: false,
            interactive: true,
            index: 0,
            bearingSnap: 7,
            pitchWithRotate: true,
            logoPosition: 'bottom-left',
            classes: [],
            attributionControl: true,
            failIfMajorPerformanceCaveat: false,
            preserveDrawingBuffer: false,
            refreshExpiredTiles: true,
            maxBounds: undefined,
            scrollZoom: true,
            boxZoom: true,
            dragRotate: true,
            dragPan: true,
            keyboard: true,
            doubleClickZoom: true,
            touchZoomRotate: true,
            trackResize: true,
            bearing: 0,
            pitch: 0,
            renderWorldCopies: true
        };
    }
    TreeMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('id');
        this.trees = [];
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.course = course;
            _this.station = _this.course.stations.find(function (station) { return station.id === station_id; });
            // let nextStation = this.course.stations.find(station => station.id === this.station.next);
            // this.nextLink = `/${nextStation['type']}/${this.course.id}/${nextStation.id}`;
            _this.treeService.getTreesByAdress('Görlitzer Park').subscribe(function (trees) {
                for (var _i = 0, _a = trees.features; _i < _a.length; _i++) {
                    var feature = _a[_i];
                    _this.trees.push({ lat: feature.geometry.coordinates[0], lon: feature.geometry.coordinates[1] });
                }
            });
        });
    };
    TreeMapComponent.prototype.treeClick = function (event) {
        console.log("click!");
    };
    TreeMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/tree-map/tree-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/tree-map/tree-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_plugins_tree_berlin_service__["a" /* TreeBerlinService */], __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], TreeMapComponent);
    return TreeMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"title\">\n  <app-action-bar [name]=\"title\" [showBack]=\"true\"></app-action-bar>\n  <div class=\"main\">\n    <a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Weiter</a>\n\n  </div>\n</div>\n<mgl-map\n  [style]=\"mapOptions.style\"\n  [zoom]=\"mapOptions.zoom\"\n  [center]=\"mapOptions.center\"\n  [doubleClickZoom]=\"false\">\n  <mgl-marker\n    [lngLat]=\"mapOptions.center\">\n    <div\n      (click)=\"log('Foo')\"\n      class=\"marker\">\n\t    Hello\n    </div>\n  </mgl-marker>\n</mgl-map>\n\n<a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Weiter</a>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WheelmapMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WheelmapMapComponent = /** @class */ (function () {
    function WheelmapMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
        this.mapOptions = {
            style: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapboxTiles.light,
            zoom: [14],
            center: [13.40497, 52.517221]
        };
    }
    WheelmapMapComponent.prototype.log = function (param) {
        console.log(param);
    };
    WheelmapMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var station_id = +this.route.snapshot.paramMap.get('station');
        var page_id = +this.route.snapshot.paramMap.get('page');
        var subject_id = +this.route.snapshot.paramMap.get('subject');
        this.coursesService.getPage(course_id, station_id, subject_id, page_id).subscribe(function (page) {
            console.log(page);
            _this.title = page.title;
            _this.coursesService.getNextPageLink(course_id, station_id, subject_id, page.next).subscribe(function (nextPage) {
                _this.nextLink = nextPage;
            });
        });
    };
    WheelmapMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wheelmap-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/wheelmap-map/wheelmap-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WheelmapMapComponent);
    return WheelmapMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar [name]=\"title\" [showMenu]=\"true\"></app-action-bar>\n<!--<div class=\"main\">-->\n  <!--<app-card *ngFor=\"let course of courses\" [course]=\"course\"></app-card>-->\n<!--</div>-->\n<div class=\"wrapper\" *ngIf=\"activeCourse\">\n  <mgl-map\n    [style]=\"mapOptions.style\"\n    [zoom]=\"mapOptions.zoom\"\n    [center]=\"mapOptions.center\"\n    [doubleClickZoom]=\"false\">\n    <mgl-layer\n      id=\"linelayer\"\n      type=\"line\"\n      [source]=\"{\n        'type': 'geojson',\n        'data': {\n          'type': 'Feature',\n          'properties': {},\n          'geometry': {\n            'type': 'LineString',\n            'coordinates': activeLine\n          }\n        }\n        }\"\n      [layout]=\"{\n        'line-join': 'round',\n        'line-cap': 'round'\n        }\"\n      [paint]=\"{\n        'line-color': '#888',\n        'line-width': 8\n        }\">\n    </mgl-layer>\n    <mgl-marker\n      *ngFor=\"let station of activeCourse.stations\"\n      [lngLat]=\"[station.position.lon, station.position.lat]\"\n    >{{station.id}} {{station.name}}\n    </mgl-marker>\n  </mgl-map>\n\n  <div class=\"box\">\n    <h1>{{activeCourse.name}}</h1>\n    <p [innerHTML]=\"activeCourse.description | safeHtml\"></p>\n    <div class=\"navigation\">\n      <a class=\"btn\" routerLink=\"\">&lt;</a>\n      <a class=\"btn\" routerLink=\"/point-to-point/{{activeCourse.id}}/{{activeCourse.entry}}\">Starten</a>\n      <a class=\"btn\" routerLink=\"\">&gt;</a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-top: 60px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.box {\n  position: absolute;\n  top: 80px;\n  left: 60px;\n  min-height: 30vh;\n  width: 50vh;\n  background-color: white;\n  border: 1px solid black;\n  padding: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turf_turf__ = __webpack_require__("../../../../@turf/turf/turf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turf_turf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__turf_turf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesOverviewComponent = /** @class */ (function () {
    function CoursesOverviewComponent(coursesService) {
        this.coursesService = coursesService;
        this.title = 'Touren';
        this.activeLine = [[13.390497, 52.518321, 49], [13.390521, 52.51815, 48], [13.390688, 52.517271, 43.1], [13.39068, 52.51723, 42.7], [13.390703, 52.517122, 42.3], [13.392561, 52.517235, 39.4], [13.392584, 52.517118, 39.3], [13.393054, 52.517149, 39.1], [13.393172, 52.517192, 39.2], [13.393289, 52.517222, 39.3], [13.393364, 52.517227, 39.3], [13.393385, 52.517089, 39.3], [13.394184, 52.517141, 39], [13.394233, 52.516831, 38.6], [13.394358, 52.516045, 36.3], [13.394367, 52.515986, 36.2], [13.394171, 52.515955, 36.2], [13.393571, 52.515912, 36.2], [13.393495, 52.515906, 36.1], [13.393164, 52.515884, 36.4], [13.393034, 52.515888, 36.5], [13.392887, 52.51588, 36.6], [13.392927, 52.515624, 37], [13.393033, 52.514997, 38.9], [13.393129, 52.514432, 41], [13.393179, 52.514104, 41.9], [13.394314, 52.514145, 43.4], [13.393179, 52.514104, 44.3], [13.393092, 52.514098, 44.2], [13.392478, 52.514057, 43.8], [13.391333, 52.513979, 43.6], [13.391248, 52.513974, 43.5], [13.391388, 52.513118, 43.2], [13.391442, 52.512801, 43.4], [13.391388, 52.513118, 43.5], [13.391248, 52.513974, 43.5], [13.390523, 52.513928, 43.6], [13.389337, 52.513854, 43.3], [13.388208, 52.513782, 42.9], [13.386962, 52.513702, 42.7], [13.386368, 52.51367, 42.4], [13.386293, 52.514122, 41.9], [13.386209, 52.51457, 41.4], [13.385703, 52.51453, 40.8], [13.386209, 52.51457, 39], [13.386158, 52.514868, 39], [13.38612, 52.515087, 38.8], [13.386106, 52.515165, 38.8], [13.386057, 52.515451, 38.6], [13.387619, 52.515556, 38.8], [13.387547, 52.516025, 39.2], [13.387619, 52.515556, 40.5], [13.386057, 52.515451, 39.5], [13.385972, 52.515896, 39.2], [13.385894, 52.516325, 38.7], [13.385854, 52.516522, 38.5], [13.385846, 52.51656, 38.4], [13.385821, 52.516671, 38.2], [13.386007, 52.516685, 38.3], [13.385973, 52.516886, 38.5], [13.385958, 52.516976, 38.6], [13.386016, 52.51698, 38.7], [13.387006, 52.517049, 39.9], [13.388066, 52.517123, 44], [13.388057, 52.517173, 44.1], [13.388046, 52.517231, 44.2], [13.38802, 52.517373, 44.3], [13.38799, 52.517529, 44.3], [13.387968, 52.517647, 44.2], [13.38794, 52.517799, 44.2], [13.387919, 52.517912, 44.2], [13.387908, 52.517983, 44.2], [13.388643, 52.518027, 44.5], [13.388544, 52.518716, 43], [13.388611, 52.518785, 42.5], [13.388625, 52.518882, 41.9], [13.388592, 52.519069, 40.8], [13.388622, 52.51907, 40.3], [13.388627, 52.519075, 39.8], [13.388627, 52.519075, 39.3], [13.388627, 52.519075, 34], [13.388622, 52.51907, 34], [13.388592, 52.519069, 34], [13.388625, 52.518882, 34], [13.388611, 52.518785, 34], [13.388544, 52.518716, 34], [13.388855, 52.518711, 34], [13.390091, 52.518793, 38.3], [13.390236, 52.518824, 38.9], [13.390371, 52.518879, 39.5], [13.390416, 52.518908, 40.4], [13.390419, 52.518887, 41.2], [13.390497, 52.518321, 46]];
        this.mapOptions = {
            style: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].mapboxTiles.light,
            zoom: [14],
            center: [13.40497, 52.517221]
        };
    }
    CoursesOverviewComponent.prototype.getCourses = function () {
        var _this = this;
        this.coursesService.getCourses()
            .subscribe(function (courses) {
            _this.courses = courses;
            console.log(courses);
            _this.updateCourse(courses[0]);
            // console.log();
        });
    };
    CoursesOverviewComponent.prototype.updateCourse = function (course) {
        this.activeCourse = course;
        var features = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["featureCollection"](this.activeCourse.stations.map(function (station) { return __WEBPACK_IMPORTED_MODULE_3__turf_turf__["point"]([station.position.lon, station.position.lat]); }));
        var center = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["center"](features);
        center = __WEBPACK_IMPORTED_MODULE_3__turf_turf__["transformTranslate"](center, -1, 90);
        console.log(center);
        this.mapOptions.center = center.geometry.coordinates;
        this.activeLine = this.activeCourse.stations.reduce(function (prev, curr) {
            console.log(prev);
            prev.push([curr.position.lon, curr.position.lat]);
            return prev;
        }, []);
    };
    CoursesOverviewComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CoursesOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-courses-overview',
            template: __webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */]])
    ], CoursesOverviewComponent);
    return CoursesOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar [name]=\"title\" [showMenu]=\"true\"></app-action-bar>\n<div class=\"main\">\n  <h1>Willkommen beim Datenspaziergang!</h1>\n  <p>Bei unserem analogen Lauf durch Berlin-Kreuzberg entdeckst du, wie die digitale Welt mit unserem Alltag verwoben\n    ist und was Daten, Zahlen und Statistiken über die Politik, das Bildungssystem und die Umwelt verraten und wie du\n    das in deiner Arbeit mit Jugendlichen nutzen kannst.\n  </p>\n  <a class=\"btn\" routerLink=\"/overview\">zu den Touren</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/intro/intro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  max-width: 50%;\n  float: left;\n  margin: 60px 10%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
        this.title = 'Datenspaziergang';
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("../../../../../src/app/pages/intro/intro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        console.log(value);
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/courses/courses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesService = /** @class */ (function () {
    function CoursesService(http) {
        this.http = http;
        this.url = '/assets/data/mock.json';
    }
    CoursesService.prototype.log = function (message) {
        console.log('Courses Service: ' + message);
    };
    CoursesService.prototype.getCourses = function () {
        return this.http.get(this.url);
    };
    CoursesService.prototype.getCourse = function (id) {
        return this.getCourses().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (courses) {
            return courses.find(function (course) { return course.id === id; });
        }));
    };
    CoursesService.prototype.getPage = function (course_id, station_id, subject_id, page_id) {
        return this.getCourse(course_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (course) {
            var station = course.stations.find(function (curr) { return curr.id === station_id; });
            var subject = station.subjects.find(function (curr) { return curr.id === subject_id; });
            return subject.pages.find(function (curr) { return curr.id === page_id; });
        }));
    };
    CoursesService.prototype.getNextPageLink = function (course_id, station_id, subject_id, next_page_id) {
        return this.getCourse(course_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (course) {
            var station = course.stations.find(function (curr) { return curr.id === station_id; });
            console.log(station);
            var subject = station.subjects.find(function (curr) { return curr.id === subject_id; });
            var page = subject.pages.find(function (curr) { return curr.id === next_page_id; });
            if (page) {
                return "/" + page.type + "/" + course_id + "/" + station_id + "/" + subject_id + "/" + page.id;
            }
            else if (subject.next) {
                return "/subjects/" + course_id + "/" + station.id;
            }
            else {
                return "/subjects/" + course_id + "/" + station.id;
            }
        }));
    };
    CoursesService.prototype.getNextStationLink = function (course_id, station_id) {
        return this.getCourse(course_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (course) {
            var station = course.stations.find(function (curr) { return curr.id === station_id; });
            if (station.next) {
                return "/point-to-point/" + course_id + "/" + station.next;
            }
            else {
                return "/success/" + course_id;
            }
        }));
    };
    CoursesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoursesService);
    return CoursesService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mapbox/mapbox.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapboxService = /** @class */ (function () {
    function MapboxService(http) {
        this.http = http;
    }
    MapboxService.prototype.getRoute = function () {
        var url = "https://api.mapbox.com/directions/v5/mapbox/driving/13.4301,52.5109;13.4265,52.5080;13.4194,52.5072?radiuses=40;;100&geometries=geojson&access_token=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mapbox_key;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* map */])(function (res) { return res['routes'][0].geometry; }));
    };
    MapboxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapboxService);
    return MapboxService;
}());



/***/ }),

/***/ "../../../../../src/app/services/next-page/next-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NextPageService = /** @class */ (function () {
    function NextPageService() {
        this.nextPageAnnouncedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.nextPageAnnounced$ = this.nextPageAnnouncedSource.asObservable();
    }
    NextPageService.prototype.announceNextPage = function (message) {
        this.nextPageAnnouncedSource.next(message);
    };
    NextPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NextPageService);
    return NextPageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/plugins/tree-berlin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeBerlinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeBerlinService = /** @class */ (function () {
    function TreeBerlinService(http) {
        this.http = http;
    }
    TreeBerlinService.prototype.getTreesByAdress = function (address) {
        var url = "https://trees.codefor.de/api/trees/?address=" + encodeURIComponent(address);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* tap */])(function (res) { return console.log("Fetching trees for " + address); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])((this.handleError('get trees', []))));
    };
    TreeBerlinService.prototype.parseTree = function (raw) {
        var tree = raw['properties'];
        var coordinates = raw['geometry']['coordinates'];
        tree.coordinates = { lon: coordinates[0], lat: coordinates[1] };
        return tree;
    };
    TreeBerlinService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    TreeBerlinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TreeBerlinService);
    return TreeBerlinService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    mapbox_key: 'pk.eyJ1Ijoib2tmZGUiLCJhIjoiY2lpOHhvMnNhMDAyNnZla280ZWhmMm96NyJ9.IvGz74dvvukg19B4Npsm1g',
    mapboxTiles: {
        light: 'mapbox://styles/mapbox/light-v9',
        street: 'mapbox://styles/mapbox/streets-v9',
        chloropleth: "mapbox://styles/okfde/cjg2f1o3b0jo52sldswi5pqz2"
    },
    geoJsonSources: {
        berlin: "https://raw.githubusercontent.com/berlinermorgenpost/Berlin-Geodaten/master/berlin_bezirke.geojson",
        schoolActivities: "/assets/data/schools.json"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map