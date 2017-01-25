System.register(['angular2/core', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                    /// Resolve HTTP using the constructor
                    // constructor(private http: Http) { }
                    /// private instance variable to hold base url
                    this.contactsUrl = 'app/appData.json';
                }
                /// Get companoes from server...
                ContactService.prototype.getContacts = function () {
                    /// return data
                    return [
                        {
                            "Id": 1000,
                            "Name": "ABCD 1000",
                            "AddressLine1": "#3/4, XXXXX Street, IL",
                            "Phone": "12345678",
                            "Fax": "3444 44 444",
                            "Email": "abcd@abb.com",
                            "Companies": [
                                {
                                    "FirstName": "TSTFN101",
                                    "LastName": "TSTLN101",
                                    "Phone": "12123 2323 3123",
                                    "Name": "dsf",
                                    "Sex": "M"
                                },
                                {
                                    "FirstName": "TSTFN102",
                                    "LastName": "TSTLN102",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "M"
                                },
                                {
                                    "FirstName": "TSTFN103",
                                    "LastName": "TSTLN103",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "F"
                                }
                            ]
                        },
                        {
                            "Id": 1001,
                            "Name": "EFGH 1001",
                            "AddressLine1": "#5/41, XXXXX Street, IL",
                            "Phone": "12345678",
                            "Fax": "3444 44 444",
                            "Email": "efgh@abb.com",
                            "Contacts": [
                                {
                                    "FirstName": "TSTFN101",
                                    "LastName": "TSTLN101",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "M"
                                }
                            ]
                        },
                        {
                            "Id": 1002,
                            "Name": "HIKL 1002",
                            "AddressLine1": "#67/4, XXXXX Street, IL",
                            "Phone": "12345678",
                            "Fax": "3444 44 444",
                            "Email": "hijk@abb.com",
                            "Contacts": [
                                {
                                    "FirstName": "TSTFN101",
                                    "LastName": "TSTLN101",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "M"
                                },
                                {
                                    "FirstName": "TSTFN103",
                                    "LastName": "TSTLN103",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "F"
                                }
                            ]
                        },
                        {
                            "Id": 1003,
                            "Name": "XYZ 1003",
                            "AddressLine1": "#3/4, XXXXX Street, IL",
                            "Phone": "12345678",
                            "Fax": "3444 44 444",
                            "Email": "xyz@abb.com",
                            "Contacts": [
                                {
                                    "FirstName": "TSTFN102",
                                    "LastName": "TSTLN102",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "M"
                                },
                                {
                                    "FirstName": "TSTFN103",
                                    "LastName": "TSTLN103",
                                    "Phone": "12123 2323 3123",
                                    "Sex": "F"
                                }
                            ]
                        }
                    ];
                    /// using get request
                    // return this.http.get(this.companiesUrl)
                    //     // ...and calling .json() on the response to return data
                    //     .map((res: Response) => res.json())
                    //     //.map((comp: Response) => <CompanyData[]>comp)
                    //     //...errors if any
                    //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
                    // this.http.get(this.companiesUrl)
                    //     .subscribe(res => this.data = res.json());
                    // console.log(this.data);
                    // this.http.get(this.companiesUrl)
                    //     .map((comp: Response) => comp.json());
                    //     //.subscribe(res => this.companies = res.json());
                    // console.log(this.companies);
                    // return this.companies;
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});
//# sourceMappingURL=contact.service.js.map