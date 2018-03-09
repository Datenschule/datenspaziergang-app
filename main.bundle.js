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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__in_memory_data_service_service__ = __webpack_require__("../../../../../src/app/in-memory-data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_mapbox_mapbox_module__ = __webpack_require__("../../../../../src/app/modules/mapbox/mapbox.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_courses_overview_courses_overview_component__ = __webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_app_routing_module__ = __webpack_require__("../../../../../src/app/modules/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_action_bar_action_bar_component__ = __webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_map_cell_map_cell_component__ = __webpack_require__("../../../../../src/app/components/map-cell/map-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_waypoint_info_waypoint_info_component__ = __webpack_require__("../../../../../src/app/components/waypoint-info/waypoint-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_waypoint_detail_waypoint_detail_component__ = __webpack_require__("../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_safe_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_page_directive__ = __webpack_require__("../../../../../src/app/directives/page.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_next_page_next_page_service__ = __webpack_require__("../../../../../src/app/services/next-page/next-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_overview_map_overview_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_course_pages_point_to_point_map_point_to_point_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_course_pages_story_story_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_course_pages_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_course_pages_success_success_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_courses_overview_courses_overview_component__["a" /* CoursesOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_action_bar_action_bar_component__["a" /* ActionBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_course_detail_course_detail_component__["a" /* CourseDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_cell_map_cell_component__["a" /* MapCellComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_waypoint_info_waypoint_info_component__["a" /* WaypointInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_waypoint_detail_waypoint_detail_component__["a" /* WaypointDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_safe_html_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pages_course_pages_overview_map_overview_map_component__["a" /* OverviewMapComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_course_pages_point_to_point_map_point_to_point_map_component__["a" /* PointToPointMapComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_course_pages_story_story_component__["a" /* StoryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_course_pages_quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_course_pages_success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_19__directives_page_directive__["a" /* PageDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__modules_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__in_memory_data_service_service__["a" /* InMemoryDataService */], { dataEncapsulation: false }),
                __WEBPACK_IMPORTED_MODULE_6__modules_mapbox_mapbox_module__["a" /* MapboxModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].mapbox_key),
                __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_courses_courses_service__["a" /* CoursesService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_5_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }, __WEBPACK_IMPORTED_MODULE_20__services_next_page_next_page_service__["a" /* NextPageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  width: 100%;\n  height: 56px;\n  color: #FFF;\n  background: #3F51B5;\n  position: fixed;\n  font-size: 20px;\n  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);\n  padding: 16px 16px 0 16px;\n  will-change: transform;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  transition: -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s, -webkit-transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;\n  z-index: 1000; }\n.header .headerButton {\n  width: 24px;\n  height: 24px;\n  margin-right: 16px;\n  text-indent: -30000px;\n  overflow: hidden;\n  opacity: 0.54;\n  -webkit-transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);\n  transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);\n  border: none;\n  outline: none;\n  cursor: pointer; }\n.header .headerButton:hover {\n  opacity: 1;\n}\n.header #butRefresh {\n  background: url(/assets/images/ic_refresh_white_24px.svg) center center no-repeat; }\n.header #butAdd {\n  background: url(/assets/images/ic_add_white_24px.svg) center center no-repeat; }\n.header #goBack {\n  background: url(/assets/images/ic_keyboard_backspace_white_24px.svg) center center no-repeat; }\n.header__title {\n  font-weight: 400;\n  font-size: 20px;\n  margin: 0;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <button id=\"goBack\" class=\"headerButton\" aria-label=\"goBack\" (click)=\"goBack()\"></button>\n  <h1 class=\"header__title\">{{name}}</h1>\n  <button id=\"butRefresh\" class=\"headerButton\" aria-label=\"Refresh\"></button>\n  <button id=\"butAdd\" class=\"headerButton\" aria-label=\"Add\"></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    ActionBarComponent.prototype.goBack = function () {
        this.locaction.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "name", void 0);
    ActionBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-action-bar',
            template: __webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  padding: 16px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n  border-radius: 2px;\n  margin: 16px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/course/{{course.id}}\">\n  <div class=\"card\">\n    {{course.name}} - {{course.location}}\n  </div>\n</a>\n\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_course__["a" /* Course */])
    ], CardComponent.prototype, "course", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/map-cell/map-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map {\n  height: 100%;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map-cell/map-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map\"></div>\n"

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
            styles: [__webpack_require__("../../../../../src/app/components/map-cell/map-cell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapCellComponent);
    return MapCellComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/waypoint-info/waypoint-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  position: absolute;\n  right: 30px;\n  top: 23vh;\n  min-height: 20vh;\n  max-width: 20vw;\n  z-index: 1;\n  background-color: white;\n  border: 1px solid blue;\n  padding: 20px;\n  height: 75vh;\n  overflow: scroll;\n}\n\n.wrapper img {\n  max-height: 10em;\n}\n\n.wrapper .content {\n  max-height: 50vh;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\nh1 {\n  font-size: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/waypoint-info/waypoint-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"course\">\n  <div class=\"wrapper\">\n\n    <h1>{{course.points[waypointId].title}}</h1>\n\n    <p>\n      <img src=\"{{course.points[waypointId].img}}\" />\n    </p>\n    <p class=\"content\">\n      {{course.points[waypointId].content}}\n    </p>\n    <p>\n      <a href=\"{{course.points[waypointId].link}}\">{{course.points[waypointId].link}}</a>\n    </p>\n    <p>\n      <a routerLink=\"/waypoint/{{course.id}}/{{waypointId}}\">Details</a>\n    </p>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/waypoint-info/waypoint-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaypointInfoComponent; });
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


var WaypointInfoComponent = /** @class */ (function () {
    function WaypointInfoComponent() {
    }
    WaypointInfoComponent.prototype.ngOnInit = function () {
        this.activeWaypoint = this.course.points[this.waypointId];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], WaypointInfoComponent.prototype, "waypointId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_course__["a" /* Course */])
    ], WaypointInfoComponent.prototype, "course", void 0);
    WaypointInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-waypoint-info',
            template: __webpack_require__("../../../../../src/app/components/waypoint-info/waypoint-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/waypoint-info/waypoint-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WaypointInfoComponent);
    return WaypointInfoComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appPage]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], PageDirective);
    return PageDirective;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var courses = [
            {
                id: 1,
                location: 'Berlin-Mitte',
                name: 'erster Spaziergang',
                preview_image: '/assets/images/datawalk.png',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ' +
                    'magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea ' +
                    'takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
                    'tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea ' +
                    'rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
                    'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ' +
                    'et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   ' +
                    '\n' +
                    '\n' +
                    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis ' +
                    'at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla ' +
                    'facilisi. Lorem ipsum dolor sit amet,',
                entry: 0,
                points: [
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.390789031982422,
                        lon: 52.51833617387861,
                        img: '/assets/images/datawalk.png',
                        content: 'Die Karte zeigt die Verteilung sämtlicher im Rahmen der Ökostromförderung geförderter Photovoltaik-Anlagen im ' +
                            'Stadtgebiet ergänzt durch die Kollektorfläche bzw. Leistung und das Errichtungsdatum der Anlage. Größere Anlagen sind durch ' +
                            'größere Symbole dargestellt. Innovative Projekte wie die BürgerInnen-Solarkraftwerke haben ebenso ihren Platz in dieser ' +
                            'Kartenansicht wie Anlagen auf Wohnhäusern oder Betrieben.Eine Darstellung der Photovoltaikanlagen verortet auf einer Karte ist ' +
                            'in Wien einzigartig.Eine dieser Anlagen befindet sich auf dem Gebäude bei der Station. Dabei handelt es sich um eine ' +
                            'Photovoltaik-Eigenerzeugungsanlage mit einer Gesamtleistung von 13 kWp und einer Fläche ca. 200 m2. Auf der Infotafel in der ' +
                            'Felderstrasse werden folgende Meßdaten angezeigt: Aktuelle Leistung in kW, Aktueller Einstrahlungswert im W/m2, Gesamtertrag ' +
                            'in kWh.',
                        title: 'Planungswerkstatt / geförderte Photovoltaikanlagen',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 1,
                        next: 2,
                        prev: 0,
                        lat: 13.394072055816649,
                        lon: 52.51682151784933,
                        img: '/assets/images/datawalk.png',
                        content: 'Die Grundkarte von Österreich basiert auf den Geodaten der Länder und deren Partnern. Sie ist <b>frei verfügbar</b>  ' +
                            'und performant. Die Geodaten stammen von:<br /><ul>\n' +
                            '<li>den neun Ländern Österreichs (<a href="http://www.geoland.at/" target="_blank" tabindex="-1">geoland.at</a>)</li>\n' +
                            '<li>dem Projekt <a href="http://www.gip.gv.at/" target="_blank" tabindex="-1">GIP.at</a></li>\n' +
                            '<li>den einigen Städten</li>\n' +
                            '</ul>',
                        title: 'Stadtinformationszentrum / Verwaltungsgrundkarte',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 2,
                        next: 3,
                        prev: 1,
                        lat: 13.394308090209961,
                        lon: 52.514209919312506,
                        img: '/assets/images/datawalk.png',
                        content: 'Neben Bäumen in Straßenzügen umfasst der Baumkataster auch Bäume in Parks und waldähnlichen Flächen in Wien. Die Bäume ' +
                            'in Straßenzügen sind komplett erfasst, da sie der MA 42 als Arbeitsbehelf dienen. Die Bäume in Parks und waldähnlichen Flächen ' +
                            'sind hingegen nur teilweise erfasst.:',
                        title: 'Rathauspark / Baumkataster',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 3,
                        next: 4,
                        prev: 2,
                        lat: 13.391432762145996,
                        lon: 52.51279959156077,
                        img: '/assets/images/datawalk.png',
                        content: 'Je Markt ist ein vollständiger Stand-Katalog verfügbar, inklusive Produktkategorien, Öffnungszeiten und weiteren ' +
                            'Informationen. Interaktive Marktpläne sorgen für eine bessere Orientierung und Übersicht.',
                        title: 'Biobauernmarkt Freyung / Markt APP',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 4,
                        next: 5,
                        prev: 3,
                        lat: 13.390467166900635,
                        lon: 52.51426215280443,
                        img: '/assets/images/datawalk.png',
                        content: 'Im RIS werden die Bundesgesetzblätter und die Landesgesetzblätter aller 9 Bundesländer rechtlich verbindlich ' +
                            'kundgemacht. Ferner findet man im RIS das konsolidierte Bundes- und Landesrecht und die Judikatur. Ebenso sind ua. ' +
                            'ausgewählte Verordnungen der Gemeinden und Erlässe der Bundesministerien sowie die Amtliche Verlautbarung der Sozialversicherung ' +
                            'enthalten.',
                        title: 'Bundeskanzleramt / Rechtsinformationssystem (RIS)',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 5,
                        next: 6,
                        prev: 4,
                        lat: 13.385703563690186,
                        lon: 52.51452331933267,
                        img: '/assets/images/datawalk.png',
                        content: 'Lorem Ipsum',
                        title: 'erster Spaziergang: Number 6',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 6,
                        next: 7,
                        prev: 5,
                        lat: 13.387548923492432,
                        lon: 52.516024996747156,
                        img: '/assets/images/datawalk.png',
                        content: 'Bei der parlamentarischen Arbeit entstehen wöchentlich Hunderte Seiten an Dokumenten rund um den Gesetzgebungsprozess. ' +
                            'Von Gesetzesinitiativen und Beschlüssen über Tagesordnungen und Stenographische Protokolle bis hin zu den Berichten der ' +
                            'Parlamentskorrespondenz sind diese Informationen zu den Aktivitäten von National- und Bundesrat online verfügbar – ein Teil ' +
                            'davon auch als Open Data. Unter anderem nutzt das Forum Informationsfreiheit die Daten für das Projekt OffenesParlament.at.',
                        title: 'Parlament / offenes Parlament',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 7,
                        next: 8,
                        prev: 6,
                        lat: 13.386948108673096,
                        lon: 52.51735687637764,
                        img: '/assets/images/datawalk.png',
                        content: 'Praxisorientierte Fallbeispiele zu den vielfältigen Arbeitsaufgaben in der Bezirksvorstehung (vor allem zu ' +
                            'Beschwerdemanagement und Projektmanagement). Die Unterrichtsvorbereitung ist durch die Tandem-Zusammenarbeit mit der ' +
                            'Bezirksvorstehung des 5. Wiener Gemeindebezirks im Zuge des Open Data Day 2017 entstanden.',
                        title: 'ehem. Landesschulrat / OpenClassrooms der Berufsschule für Verwaltungsberufe',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 8,
                        next: 0,
                        prev: 7,
                        lat: 13.38883638381958,
                        lon: 52.51905431150669,
                        img: '/assets/images/datawalk.png',
                        content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung Ludwig Wien zu bereits aufbereiteten ' +
                            'Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
                        title: 'Museumsquartier / Was haben die Künstler der Sammlung des mumok mit der Wirtschaftsuniversität Wien zu tun?',
                        link: 'http://datenschule.de'
                    }
                ],
                lines: [
                    { id: 'line1', coordinates: [] }
                ],
                pages: [
                    {
                        id: 0,
                        type: "overview-map",
                        data: {
                            points: [
                                { lat: 13.390789031982422, lon: 52.51833617387861 },
                                { lat: 13.394072055816649, lon: 52.51682151784933 },
                                { lat: 13.394308090209961, lon: 52.514209919312506 },
                                { lat: 13.391432762145996, lon: 52.51279959156077 },
                                { lat: 13.390467166900635, lon: 52.51426215280443 },
                                { lat: 13.385703563690186, lon: 52.51452331933267 },
                                { lat: 13.387548923492432, lon: 52.516024996747156 },
                                { lat: 13.386948108673096, lon: 52.51735687637764 },
                                { lat: 13.38883638381958, lon: 52.51905431150669 }
                            ]
                        },
                        next: 1
                    },
                    {
                        type: "pointtopoint",
                        id: 1,
                        data: {
                            name: "First Section",
                            points: [{ lat: 13.38883638381958, lon: 52.51905431150669 }, { lat: 13.386948108673096, lon: 52.51735687637764 }]
                        },
                        next: 2
                    },
                    {
                        type: "story",
                        id: 2,
                        data: {
                            img: '/assets/images/datawalk.png',
                            content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung Ludwig Wien zu bereits aufbereiteten ' +
                                'Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
                            title: 'Museumsquartier',
                            link: 'http://datenschule.de'
                        },
                        next: 3
                    },
                    {
                        type: "pointtopoint",
                        id: 3,
                        data: {
                            name: "First Section",
                            points: [{ lat: 13.38883638381958, lon: 52.51905431150669, }, { at: 13.386948108673096, lon: 52.51735687637764 }]
                        },
                        next: 4,
                    },
                    {
                        type: "story",
                        id: 4,
                        data: {
                            img: '/assets/images/datawalk.png',
                            content: 'Künstler zu Kunstwerken der Sammlung des Museum Moderner Kunst Stiftung Ludwig Wien zu bereits aufbereiteten ' +
                                'Kunstwerken, die sich auch in der Online-Sammlung des mumok befinden.',
                            title: 'Museumsquartier / Was haben die Künstler der Sammlung des mumok mit der Wirtschaftsuniversität Wien zu tun?',
                            link: 'http://datenschule.de'
                        },
                        next: 5
                    },
                    {
                        type: "quiz",
                        id: 5,
                        data: {
                            question: "How do you do",
                            answers: ["Good", "Bad", "Fine"],
                            correct: 2
                        },
                        next: 6
                    },
                    {
                        type: "success",
                        id: 6,
                        data: { message: "You won!!!!" }
                    }
                ]
            },
            {
                id: 2,
                location: 'Bonn',
                name: 'Rund um Bonn',
                preview_image: '/assets/images/datawalk.png',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n' +
                    '\n' +
                    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,',
                points: [
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.390789031982422,
                        lon: 52.51833617387861,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.394072055816649,
                        lon: 52.51682151784933,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.394308090209961,
                        lon: 52.514209919312506,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.391432762145996,
                        lon: 52.51279959156077,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.390467166900635,
                        lon: 52.51426215280443,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.385703563690186,
                        lon: 52.51452331933267,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.387548923492432,
                        lon: 52.516024996747156,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.386948108673096,
                        lon: 52.51735687637764,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    },
                    {
                        id: 0,
                        next: 1,
                        prev: 8,
                        lat: 13.38883638381958,
                        lon: 52.51905431150669,
                        img: '/assets/images/datawalk.png',
                        title: 'Bonn: Number 1',
                        content: 'Lorem Ipsum',
                        link: 'http://datenschule.de'
                    }
                ]
            }
        ];
        return { courses: courses };
    };
    return InMemoryDataService;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_waypoint_detail_waypoint_detail_component__ = __webpack_require__("../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_course_pages_overview_map_overview_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_course_pages_point_to_point_map_point_to_point_map_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_course_pages_quiz_quiz_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_pages_story_story_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_course_pages_success_success_component__ = __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_2__pages_courses_overview_courses_overview_component__["a" /* CoursesOverviewComponent */] },
    { path: 'course/:id', component: __WEBPACK_IMPORTED_MODULE_3__pages_course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: 'waypoint/:course/:waypoint', component: __WEBPACK_IMPORTED_MODULE_4__pages_waypoint_detail_waypoint_detail_component__["a" /* WaypointDetailComponent */] },
    { path: 'overview-map/:course/:id', component: __WEBPACK_IMPORTED_MODULE_5__pages_course_pages_overview_map_overview_map_component__["a" /* OverviewMapComponent */] },
    { path: 'pointtopoint/:course/:id', component: __WEBPACK_IMPORTED_MODULE_6__pages_course_pages_point_to_point_map_point_to_point_map_component__["a" /* PointToPointMapComponent */] },
    { path: 'quiz/:course/:id', component: __WEBPACK_IMPORTED_MODULE_7__pages_course_pages_quiz_quiz_component__["a" /* QuizComponent */] },
    { path: 'story/:course/:id', component: __WEBPACK_IMPORTED_MODULE_8__pages_course_pages_story_story_component__["a" /* StoryComponent */] },
    { path: 'success/:course/:id', component: __WEBPACK_IMPORTED_MODULE_9__pages_course_pages_success_success_component__["a" /* SuccessComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/mapbox/components/mapbox-line/mapbox-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxLineDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapboxLineDirective = /** @class */ (function () {
    function MapboxLineDirective() {
        this.id = 'line-0';
        this.layout = { 'line-join': 'round', 'line-cap': 'round' };
        this.paint = { 'line-width': 8, 'line-color': '#000' };
        this.mapLoadedSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    MapboxLineDirective.prototype.ngOnInit = function () {
    };
    MapboxLineDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.map.currentValue) {
            this.map.on('style.load', function () { return _this.initLine(changes.map.currentValue); });
        }
    };
    MapboxLineDirective.prototype.initLine = function (map) {
        console.log('initline');
        map.addLayer({
            id: this.id,
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: this.coordinates
                    }
                }
            },
            layout: this.layout,
            paint: this.paint
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxLineDirective.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__).LineLayout) === "function" && _a || Object)
    ], MapboxLineDirective.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__).LinePaint) === "function" && _b || Object)
    ], MapboxLineDirective.prototype, "paint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */])
    ], MapboxLineDirective.prototype, "mapLoadedSubject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MapboxLineDirective.prototype, "coordinates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_c = (typeof __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__).Map) === "function" && _c || Object)
    ], MapboxLineDirective.prototype, "map", void 0);
    MapboxLineDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'mapbox-line',
        }),
        __metadata("design:paramtypes", [])
    ], MapboxLineDirective);
    return MapboxLineDirective;
    var _a, _b, _c;
}());



/***/ }),

/***/ "../../../../../src/app/modules/mapbox/components/mapbox-marker-direction/mapbox-marker-direction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxMarkerDirectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
*
* Mapbox Marker Directive component
*
*/



var MapboxMarkerDirectionComponent = /** @class */ (function () {
    function MapboxMarkerDirectionComponent() {
        this.direction = 'next';
        this.mapLoadedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.id = 'line-0';
        this.layout = {};
        this.paint = {};
    }
    MapboxMarkerDirectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapLoadedSubject.subscribe(function (event) {
            _this.map = event;
            _this.initLine();
        });
    };
    MapboxMarkerDirectionComponent.prototype.initLine = function () {
        console.log('initline');
        console.log(this.map);
        this.map.addLayer({
            id: this.id,
            type: 'line',
            source: ' { type: "geojson", ' +
                'data: { ' +
                'type: "Feature", ' +
                'properties: {}, ' +
                'geometry: { ' +
                'type: "LineString", coordinates: [' +
                '[ 13.390789031982422, lon: 52.51833617387861],' +
                '[ 13.394072055816649, lon: 52.51682151784933},' +
                '[ 13.394308090209961, 52.514209919312506],' +
                '[ 13.391432762145996, 52.51279959156077],' +
                '[ 13.390467166900635, 52.51426215280443],' +
                '[ 13.385703563690186, 52.51452331933267],' +
                '[ 13.387548923492432, 52.516024996747156],' +
                '[ 13.386948108673096, 52.51735687637764],' +
                '[ 13.38883638381958, 52.51905431150669]' +
                ']' +
                '}' +
                '}',
            layout: this.layout,
            paint: this.paint
        });
    };
    MapboxMarkerDirectionComponent.prototype.action = function () {
        if (this.direction === 'next') {
            // this._mapBoxService.nextMarker();
        }
        else {
            // this._mapBoxService.prevMarker();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MapboxMarkerDirectionComponent.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */])
    ], MapboxMarkerDirectionComponent.prototype, "mapLoadedSubject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxMarkerDirectionComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MapboxMarkerDirectionComponent.prototype, "coordinates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__).LineLayout) === "function" && _a || Object)
    ], MapboxMarkerDirectionComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_b = (typeof __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__).LinePaint) === "function" && _b || Object)
    ], MapboxMarkerDirectionComponent.prototype, "paint", void 0);
    MapboxMarkerDirectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mapbox-marker-direction',
            template: "\n    <a (click)=\"action()\">\n      <ng-content></ng-content>\n    </a>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], MapboxMarkerDirectionComponent);
    return MapboxMarkerDirectionComponent;
    var _a, _b;
}());



/***/ }),

/***/ "../../../../../src/app/modules/mapbox/components/mapbox-marker/mapbox-marker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxMarkerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
*
* Mapbox Marker component
*
*/


var MapboxMarkerDirective = /** @class */ (function () {
    function MapboxMarkerDirective() {
        this.width = 60;
        this.height = 60;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MapboxMarkerDirective.prototype.ngOnInit = function () {
    };
    MapboxMarkerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(changes);
        if (changes.map.currentValue) {
            this.map.on('style.load', function () { return _this.addPins(changes.map.currentValue); });
        }
    };
    MapboxMarkerDirective.prototype.addPins = function (map) {
        var _this = this;
        var el = document.createElement('div');
        console.log(this.map);
        el.className = 'marker';
        el.style.backgroundImage = 'url(' + this.image + ')';
        el.style.backgroundSize = 'cover';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.width = this.width + 'px';
        el.style.height = this.height + 'px';
        new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Marker"](el, { offset: [-this.width / 2, -this.height / 2] })
            .setLngLat(this.coordinates)
            .addTo(map);
        el.addEventListener('click', function () {
            if (_this.flyTo) {
                // this.mapBoxService.flyTo(this.coordinates, this.flyTo);
                //  TODO: Implement Fly to
            }
            _this.click.emit({
                data: _this.data,
                coordinates: _this.coordinates
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MapboxMarkerDirective.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxMarkerDirective.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxMarkerDirective.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MapboxMarkerDirective.prototype, "coordinates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MapboxMarkerDirective.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxMarkerDirective.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MapboxMarkerDirective.prototype, "flyTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], MapboxMarkerDirective.prototype, "click", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__).Map) === "function" && _a || Object)
    ], MapboxMarkerDirective.prototype, "map", void 0);
    MapboxMarkerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'mapbox-marker',
        }),
        __metadata("design:paramtypes", [])
    ], MapboxMarkerDirective);
    return MapboxMarkerDirective;
    var _a;
}());



/***/ }),

/***/ "../../../../../src/app/modules/mapbox/components/mapbox/mapbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
*
* Mapbox component
*
*/


var MapboxComponent = /** @class */ (function () {
    function MapboxComponent() {
        this.options = this.defaultOptions();
        this.index = 0;
    }
    MapboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimeout(() => {
        //   this._mapBoxService.Map(this.mapOptions);
        //
        //   this.state.emit("Loaded");
        // }, 100);
        // this.assign(mapbox, 'accessToken', this.accessToken);
        __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"] = 'pk.eyJ1Ijoib2tmZGUiLCJhIjoiY2lpOHhvMnNhMDAyNnZla280ZWhmMm96NyJ9.IvGz74dvvukg19B4Npsm1g';
        setTimeout(function () {
            _this.map = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Map"](_this.options);
            _this.map.addControl(new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["NavigationControl"]());
            _this.map.addControl(new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["GeolocateControl"]());
        });
    };
    MapboxComponent.prototype.defaultOptions = function () {
        return {
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [122.390789031982422, 52.51833617387861],
            container: "map" + this.index,
            zoom: 15,
            hash: false,
            interactive: true,
            index: this.index,
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapboxComponent.prototype, "options", void 0);
    MapboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mapbox',
            template: "\n    <div style=\"position: relative; overflow: hidden;\">\n      <div [attr.id]=\"'map' + index\" style=\"height: 100vh; margin-top:56px;\"></div>\n      <ng-content></ng-content>\n    </div>",
        }),
        __metadata("design:paramtypes", [])
    ], MapboxComponent);
    return MapboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/mapbox/mapbox.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapboxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mapbox_mapbox_component__ = __webpack_require__("../../../../../src/app/modules/mapbox/components/mapbox/mapbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_mapbox_marker_mapbox_marker_component__ = __webpack_require__("../../../../../src/app/modules/mapbox/components/mapbox-marker/mapbox-marker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mapbox_marker_direction_mapbox_marker_direction_component__ = __webpack_require__("../../../../../src/app/modules/mapbox/components/mapbox-marker-direction/mapbox-marker-direction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mapbox_line_mapbox_line_component__ = __webpack_require__("../../../../../src/app/modules/mapbox/components/mapbox-line/mapbox-line.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MapboxModule = /** @class */ (function () {
    function MapboxModule() {
    }
    MapboxModule_1 = MapboxModule;
    MapboxModule.forRoot = function (config) {
        return {
            ngModule: MapboxModule_1,
            providers: [
                { provide: 'MAPBOX_KEY', useValue: config }
            ]
        };
    };
    MapboxModule = MapboxModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_mapbox_mapbox_component__["a" /* MapboxComponent */], __WEBPACK_IMPORTED_MODULE_2__components_mapbox_marker_mapbox_marker_component__["a" /* MapboxMarkerDirective */], __WEBPACK_IMPORTED_MODULE_3__components_mapbox_marker_direction_mapbox_marker_direction_component__["a" /* MapboxMarkerDirectionComponent */], __WEBPACK_IMPORTED_MODULE_4__components_mapbox_line_mapbox_line_component__["a" /* MapboxLineDirective */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__components_mapbox_mapbox_component__["a" /* MapboxComponent */], __WEBPACK_IMPORTED_MODULE_2__components_mapbox_marker_mapbox_marker_component__["a" /* MapboxMarkerDirective */], __WEBPACK_IMPORTED_MODULE_3__components_mapbox_marker_direction_mapbox_marker_direction_component__["a" /* MapboxMarkerDirectionComponent */], __WEBPACK_IMPORTED_MODULE_4__components_mapbox_line_mapbox_line_component__["a" /* MapboxLineDirective */]]
        })
    ], MapboxModule);
    return MapboxModule;
    var MapboxModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-detail/course-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-top: 60px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.detail {\n  padding: 16px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fff;\n  border-radius: 2px;\n  margin: 16px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.detail img{\n  max-width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-detail/course-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar  [name]=\"course.name\"></app-action-bar>\n  <div class=\"main\">\n    <div class=\"detail\">\n      <img src=\"{{course.preview_image}}\" alt=\"\">\n      <p>{{course.description}}</p>\n      <button routerLink=\"{{entryLink}}\">Take the tour!</button>\n    </div>\n  </div>\n</div>\n\n"

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
            _this.course = course;
            _this.entryLink = "/" + course.pages[course.entry].type + "/" + course.id + "/" + course.entry;
        });
    };
    CourseDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course-detail',
            template: __webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-detail/course-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */]])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar [name]=\"course.name\"></app-action-bar>\n  <div class=\"main\">\n    <mapbox [options]=\"mapOptions\" #map>\n      <mapbox-marker\n        *ngFor=\"let point of course.points\"\n        [coordinates]=\"[ point.lat, point.lon ]\"\n        [image]=\"image\"\n        [width]=\"30\"\n        [height]=\"50\"\n        [data]=\"point\"\n        (click)=\"click($event)\"\n        [map]=\"map.map\"\n        >\n      </mapbox-marker>\n      <mapbox-line\n        [id]=\"lineId\"\n        [map]=\"map.map\"\n        [coordinates]=\"[ [ 13.390789031982422, 52.51833617387861],\n        [ 13.394072055816649, 52.51682151784933],\n        [ 13.394308090209961, 52.514209919312506],\n        [ 13.391432762145996, 52.51279959156077],\n        [ 13.390467166900635, 52.51426215280443],\n        [ 13.385703563690186, 52.51452331933267],\n        [ 13.387548923492432, 52.516024996747156],\n        [ 13.386948108673096, 52.51735687637764],\n        [ 13.38883638381958, 52.51905431150669]\n        ]\"\n      ></mapbox-line>\n    </mapbox>\n    <a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Los gehts</a>\n    <!--<app-waypoint-info [course]=\"course\" [waypointId]=\"activeWaypoint\"></app-waypoint-info>-->\n  </div>\n</div>\n<div class=\"wrapper\">\n  <!--<div class=\"mymap\" id=\"mymap\"></div>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/overview-map/overview-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewMapComponent; });
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
    OverviewMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var page_id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            var pageData = course.pages.find(function (page) { return page.id === page_id; });
            var nextType = course.pages.find(function (page) { return page.id === pageData.next; }).type;
            _this.nextLink = "/" + nextType + "/" + course.id + "/" + pageData.next;
            _this.course = course;
            _this.course.points.map(function (point) {
                point['active'] = false;
                return point;
            });
        });
    };
    OverviewMapComponent.prototype.click = function (event) {
        console.log(event.data);
        this.course.points.forEach(function (point) {
            if (point.id === event.data.id) {
                point['active'] = true;
            }
            else {
                point['active'] = false;
            }
            // return point;
        });
        this.activeWaypoint = event.data.id;
    };
    OverviewMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/overview-map/overview-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], OverviewMapComponent);
    return OverviewMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar [name]=\"course.name\"></app-action-bar>\n  <div class=\"main\">\n    <mapbox [options]=\"mapOptions\" #map>\n      <mapbox-marker\n        *ngFor=\"let point of points\"\n        [coordinates]=\"[ point.lat, point.lon ]\"\n        [image]=\"image\"\n        [width]=\"30\"\n        [height]=\"50\"\n        [data]=\"point\"\n        (click)=\"click($event)\"\n        [map]=\"map.map\"\n      >\n      </mapbox-marker>\n      <mapbox-line\n        [map]=\"map.map\"\n        [coordinates]=\"[[13.38883638381958, 52.51905431150669], [13.386948108673096, 52.51735687637764]]\"\n      ></mapbox-line>\n    </mapbox>\n    <a class=\"btn\" style=\"position: absolute; top: 100px; left: 50px\" routerLink=\"{{nextLink}}\">Ok, angekommen, was mach ich hier?</a>\n    <!--<app-waypoint-info [course]=\"course\" [waypointId]=\"activeWaypoint\"></app-waypoint-info>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointToPointMapComponent; });
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



var PointToPointMapComponent = /** @class */ (function () {
    function PointToPointMapComponent(coursesService, route) {
        this.coursesService = coursesService;
        this.route = route;
        this.image = '/assets/images/pin.jpeg';
        this.mapOptions = {
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [13.390497, 52.517221],
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
    PointToPointMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var page_id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.course = course;
            console.log(course);
            var pageData = course.pages.find(function (page) { return page.id === page_id; });
            _this.points = pageData.data['points'];
            var nextType = course.pages.find(function (page) { return page.id === pageData.next; }).type;
            _this.nextLink = "/" + nextType + "/" + course.id + "/" + pageData.next;
        });
    };
    PointToPointMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-point-to-point-map',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/point-to-point-map/point-to-point-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PointToPointMapComponent);
    return PointToPointMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/quiz/quiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  quiz works!\n  <button routerLink=\"{{nextLink}}\">Next</button>\n</p>\n"

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
        this.coursesService = coursesService;
        this.route = route;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        var course_id = +this.route.snapshot.paramMap.get('course');
        var page_id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.page = course.pages.find(function (page) { return page.id === page_id; });
            var nextType = course.pages.find(function (page) { return page.id === _this.page.next; }).type;
            _this.nextLink = "/" + nextType + "/" + course.id + "/" + _this.page.next;
        });
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"course\">\n  <app-action-bar  [name]=\"story.title\"></app-action-bar>\n  <div class=\"main\" [style.background-image]=\"image\" style=\"height: 100vh; background-size: cover\">\n    <div class=\"detail\">\n      <!--<img src=\"{{course.preview_image}}\" alt=\"\">-->\n      <p style=\"padding-top: 20%\">{{course.description}}</p>\n      <a class=\"btn\" routerLink=\"{{nextLink}}\">Weiter</a>\n    </div>\n  </div>\n</div>\n\n\n"

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
        var course_id = +this.route.snapshot.paramMap.get('course');
        var page_id = +this.route.snapshot.paramMap.get('id');
        this.coursesService.getCourse(course_id).subscribe(function (course) {
            _this.page = course.pages.find(function (page) { return page.id === page_id; });
            _this.story = _this.page.data;
            console.log(_this.story);
            _this.course = course;
            var nextType = course.pages.find(function (page) { return page.id === _this.page.next; }).type;
            _this.nextLink = "/" + nextType + "/" + course.id + "/" + _this.page.next;
            _this.image = _this.image = _this.sanitizer.bypassSecurityTrustStyle("url(" + _this.story.img + ")");
        });
    };
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  success works!\n  <button routerLink=\"/overview\">Back to Overview</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/course-pages/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
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

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/course-pages/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-top: 60px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-action-bar [name]=\"title\"></app-action-bar>\n<div class=\"main\">\n  <app-card *ngFor=\"let course of courses\" [course]=\"course\"></app-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/courses-overview/courses-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__ = __webpack_require__("../../../../../src/app/services/courses/courses.service.ts");
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
        this.title = "Datenspaziergang";
    }
    CoursesOverviewComponent.prototype.getCourses = function () {
        var _this = this;
        this.coursesService.getCourses()
            .subscribe(function (courses) { return _this.courses = courses; });
    };
    CoursesOverviewComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    CoursesOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-courses-overview',
            template: __webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/courses-overview/courses-overview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_courses_courses_service__["a" /* CoursesService */]])
    ], CoursesOverviewComponent);
    return CoursesOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"waypoint\">\n  <app-action-bar [name]=\"waypoint.title\"></app-action-bar>\n  <div class=\"main\">\n    <p>{{waypoint.title}}</p>\n    <p><img src=\"{{waypoint.img}}\" alt=\"\"></p>\n    <p>{{waypoint.content}}</p>\n    <p><a href=\"{{waypoint.link}}\">{{waypoint.link}}</a></p>\n  </div>\n  <button (click)=\"nextWaypoint()\">Next</button>\n  <button (click)=\"prevWaypoint()\">Previous</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaypointDetailComponent; });
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



var WaypointDetailComponent = /** @class */ (function () {
    function WaypointDetailComponent(route, coursesService) {
        this.route = route;
        this.coursesService = coursesService;
    }
    WaypointDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var waypointId = +this.route.snapshot.paramMap.get('waypoint');
        var courseId = +this.route.snapshot.paramMap.get('course');
        this.coursesService.getCourse(courseId).subscribe(function (course) {
            _this.course = course;
            _this.waypoint = course.points[waypointId];
        });
    };
    WaypointDetailComponent.prototype.nextWaypoint = function () {
        var _this = this;
        this.waypoint = this.course.points.find(function (point) { return point.id === _this.waypoint.next; });
    };
    WaypointDetailComponent.prototype.prevWaypoint = function () {
        var _this = this;
        this.waypoint = this.course.points.find(function (point) { return point.id === _this.waypoint.prev; });
    };
    WaypointDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-waypoint-detail',
            template: __webpack_require__("../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/waypoint-detail/waypoint-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_courses_courses_service__["a" /* CoursesService */]])
    ], WaypointDetailComponent);
    return WaypointDetailComponent;
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
    SafeHtmlPipe.prototype.transform = function (value, args) {
        console.log(value);
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
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
        this.coursesUrl = 'api/courses';
    }
    CoursesService.prototype.log = function (message) {
        console.log('Courses Service: ' + message);
    };
    CoursesService.prototype.getCourses = function () {
        return this.http.get(this.coursesUrl);
    };
    CoursesService.prototype.getCourse = function (id) {
        var _this = this;
        console.log('fetching course');
        var url = this.coursesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched course id=" + id); }));
    };
    CoursesService.prototype.getPageForCourse = function (course_id, page_id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.getCourse(course_id).subscribe(function (course) {
                observer.next(course.pages.find(function (page) { return page.id === page_id; }));
            });
        });
    };
    CoursesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CoursesService);
    return CoursesService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NextPageService);
    return NextPageService;
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
    mapbox_key: 'pk.eyJ1Ijoib2tmZGUiLCJhIjoiY2lpOHhvMnNhMDAyNnZla280ZWhmMm96NyJ9.IvGz74dvvukg19B4Npsm1g'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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