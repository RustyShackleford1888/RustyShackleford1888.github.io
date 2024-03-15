(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        10: function(e, t, a) {
            e.exports = a(16)
        },
        16: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                s = a(9),
                c = a.n(s),
                l = a(6),
                i = a(7),
                m = a(1),
                o = a(2),
                u = a(4),
                p = a(3),
                h = a(5);
            var f = function(e) {
                var t = e.itemProps;
                return t.length > 0 ? t.map(function(e, t) {
                    for (var a = [], n = 0; n < e.length; n += 2) a.push({
                        color: e[n],
                        text: e[n + 1]
                    });
                    var s = a.map(function(e, t) {
                        return r.a.createElement("span", {
                            key: t,
                            className: "no-wrap diablo_" + e.color
                        }, " ", e.text)
                    });
                    return r.a.createElement("span", {
                        key: t,
                        className: "item-property"
                    }, s)
                }) : r.a.createElement("p", null, "Search to find items.")
            };
            var d = function(e) {
                var t = e.item;
                return r.a.createElement("div", {
                    className: "item row"
                }, r.a.createElement("div", {
                    className: "row",
                    id: "{item.index}"
                }, r.a.createElement("div", {
                    className: "item-left four columns"
                }, r.a.createElement("span", {
                    className: "item-graphic "
                }, r.a.createElement("img", {
                    alt: "",
                    src: "/images/items/" + t.imageFile
                })), r.a.createElement("span", {
                    className: "item-name diablo_unique"
                }, t.name), r.a.createElement("span", {
                    className: "item-type"
                }, t.item)), r.a.createElement("div", {
                    key: t.index,
                    className: "item-right eight columns"
                }, r.a.createElement(f, {
                    key: "unique-baseProps",
                    itemProps: t.baseProps
                }), r.a.createElement(f, {
                    key: "unique-props",
                    itemProps: t.props
                }))))
            };
            var b = function(e) {
                    var t = e.itemProps,
                        a = e.color;
                    return t.length > 0 ? t.map(function(e, t) {
                        return r.a.createElement("span", {
                            key: t,
                            className: "item-property"
                        }, r.a.createElement("div", {
                            className: "no-wrap diablo_" + a
                        }, e))
                    }) : ""
                },
                g = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row",
                                id: "{item.index}"
                            }, r.a.createElement("div", {
                                className: "item-left four columns"
                            }, r.a.createElement("span", {
                                className: "item-name diablo_unique"
                            }, e.name), r.a.createElement("div", {
                                className: "u-cf-ctr"
                            }, r.a.createElement("span", {
                                className: "diablo_white inline;"
                            }, "Runes: "), r.a.createElement("span", {
                                className: "diablo_unique inline;"
                            }, e.runes.reduce(function(e, t) {
                                return e + ", " + t
                            }))), r.a.createElement("span", {
                                className: "diablo_white"
                            }, "Sockets: ", e.runes.length), r.a.createElement("span", {
                                className: "diablo_white"
                            }, "cLvl Req: ", e.lvlreq), r.a.createElement("div", {
                                className: "u-cf-ctr"
                            }, r.a.createElement("span", {
                                className: "diablo_white"
                            }, "Items: ", e.items.reduce(function(e, t) {
                                return e + ", " + t
                            })))), r.a.createElement("div", {
                                className: "item-right eight columns"
                            }, r.a.createElement(f, {
                                itemProps: e.props
                            }), e.armorHelmProps.length > 0 && r.a.createElement("span", {
                                className: "no-wrap diablo_white u-cf-ctr"
                            }, "Rune bonuses for: Helm"), r.a.createElement(b, {
                                itemProps: e.armorHelmProps
                            }), e.weaponProps.length > 0 && r.a.createElement("span", {
                                className: "no-wrap diablo_white u-cf-ctr"
                            }, "Rune bonuses for: Weapon"), r.a.createElement(b, {
                                itemProps: e.weaponProps
                            }), e.shieldProps.length > 0 && r.a.createElement("span", {
                                className: "no-wrap diablo_white u-cf-ctr"
                            }, "Rune bonuses for: Shield"), r.a.createElement(b, {
                                itemProps: e.shieldProps
                            }))))
                        }
                    }]), t
                }(n.Component),
                y = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row u-cf-ctr",
                                id: e.index
                            }, r.a.createElement("h5", {
                                className: "diablo_green"
                            }, e.name), r.a.createElement("span", {
                                className: "item-property  b block"
                            }, "Partial Set Bonus"), r.a.createElement(b, {
                                key: "partial-set-props",
                                color: "green",
                                itemProps: e.partialProps
                            }), r.a.createElement("span", {
                                className: "item-property b block m-top-10"
                            }, "Complete Set Bonus"), r.a.createElement(b, {
                                key: "full-set-props",
                                color: "gold",
                                itemProps: e.fullProps
                            })))
                        }
                    }]), t
                }(n.Component),
                E = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row",
                                id: e.index
                            }, r.a.createElement("div", {
                                className: "item-left four columns"
                            }, r.a.createElement("span", {
                                className: "item-graphic "
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "/images/items/" + e.imageFile
                            })), r.a.createElement("span", {
                                className: "item-name diablo_unique"
                            }, e.name), r.a.createElement("span", {
                                className: "item-type"
                            }, e.item)), r.a.createElement("div", {
                                className: "item-right eight columns"
                            }, r.a.createElement(f, {
                                itemProps: e.baseProps
                            }), r.a.createElement(f, {
                                itemProps: e.props
                            }))))
                        }
                    }]), t
                }(n.Component),
                k = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row",
                                id: "{item.index}"
                            }, r.a.createElement("div", {
                                className: "item-left four columns"
                            }, r.a.createElement("span", {
                                className: "item-graphic "
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "/images/items/" + e.imageFile
                            })), r.a.createElement("span", {
                                className: "item-name diablo_unique"
                            }, e.name), r.a.createElement("span", {
                                className: "item-type"
                            }, e.item)), r.a.createElement("div", {
                                className: "item-right eight columns"
                            }, r.a.createElement(f, {
                                key: "generic-props",
                                itemProps: e.props
                            }))))
                        }
                    }]), t
                }(n.Component),
                v = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row",
                                id: "{item.index}"
                            }, r.a.createElement("div", {
                                className: "item-left four columns"
                            }, r.a.createElement("span", {
                                className: "item-graphic "
                            }, r.a.createElement("img", {
                                alt: "",
                                src: "/images/items/" + e.imageFile
                            })), r.a.createElement("span", {
                                className: "item-name diablo_unique"
                            }, e.name), r.a.createElement("span", {
                                className: "item-type"
                            }, e.item)), r.a.createElement("div", {
                                className: "item-right eight columns"
                            }, r.a.createElement(b, {
                                key: "generic-baseProps",
                                color: "white",
                                itemProps: e.baseProps
                            }), r.a.createElement(b, {
                                key: "generic-props",
                                color: "blue",
                                itemProps: e.props
                            }))))
                        }
                    }]), t
                }(n.Component),
                w = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item;
                            return r.a.createElement("div", {
                                className: "item row"
                            }, r.a.createElement("div", {
                                className: "row",
                                id: "{item.index}"
                            }, r.a.createElement("div", {
                                className: "item-left four columns"
                            }, r.a.createElement("span", {
                                className: "item-graphic "
                            }, r.a.createElement("img", {
                                alt: "",
                                src: e.imageFile
                            })), r.a.createElement("span", {
                                className: "item-name diablo_unique"
                            }, e.name), r.a.createElement("span", {
                                className: "item-type capitalize"
                            }, e.type)), r.a.createElement("div", {
                                className: "item-right eight columns"
                            }, r.a.createElement(b, {
                                key: "generic-props",
                                color: "white",
                                itemProps: e.props
                            }))))
                        }
                    }]), t
                }(n.Component),
                I = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item,
                                t = e.items.join(", "),
                                a = e.eItems.join(", ");
                            return r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement("span", {
                                className: "no-wrap diablo_" + e.color
                            }, e.name)), r.a.createElement("td", null, e.props), r.a.createElement("td", null, t, e.eItems.length > 0 && r.a.createElement("p", null, r.a.createElement("span", {
                                className: "diablo_red"
                            }, "NOT:", r.a.createElement("br", null), a))))
                        }
                    }]), t
                }(n.Component);
            var j = function(e) {
                var t = e.items,
                    a = e.itemType,
                    n = e.filters,
                    s = t.filter(function(e) {
                        var t = !0;
                        return n.forEach(function(a) {
                            if (!a.checked) {
                                if (a.name, a.label === e.slot) return void(t = !1);
                                if (a.label === e.category || a.label.slice(0, -1) === e.category) return void(t = !1);
                                e.subCategories && e.subCategories.forEach(function(e) {
                                    a.label !== e && a.label.slice(0, -1) !== e || (t = !1)
                                })
                            }
                        }), t
                    });
                switch (a) {
                    case "Uniques":
                        return s.map(function(e, t) {
                            return r.a.createElement(d, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Set Items":
                        return s.map(function(e, t) {
                            return r.a.createElement(E, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Full Sets":
                        return s.map(function(e, t) {
                            return r.a.createElement(y, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Augments":
                        return t.map(function(e, t) {
                            return r.a.createElement(k, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Runewords":
                        return t.map(function(e, t) {
                            return r.a.createElement(g, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Bases":
                        return s.map(function(e, t) {
                            return r.a.createElement(v, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Charm Components":
                        return t.map(function(e, t) {
                            return r.a.createElement(k, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    case "Magic Prefixes/Suffixes":
                        return s.map(function(e, t) {
                            return r.a.createElement(I, {
                                key: e.index + t,
                                item: e
                            })
                        });
                    default:
                        return ""
                }
            };
            var N = function(e) {
                    var t = e.matchedItemList,
                        a = e.filters;

                    function n(e) {
                        if (e.show && e.found.length > 0) {
                            if ("Magic Prefixes/Suffixes" === e.title) {
                                var t = e.found.filter(function(e) {
                                        return "prefix" === e.affType
                                    }),
                                    a = e.found.filter(function(e) {
                                        return "suffix" === e.affType
                                    });
                                return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", null, e.title, " (", e.found.length, ")"), r.a.createElement("table", {
                                    className: "five columns"
                                }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Name"), r.a.createElement("th", null, "Prop"), r.a.createElement("th", null, "Items"))), r.a.createElement("tbody", null, r.a.createElement(j, {
                                    items: t,
                                    itemType: e.title,
                                    filters: e.filters
                                }))), r.a.createElement("table", {
                                    className: "five columns"
                                }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Name"), r.a.createElement("th", null, "Prop"), r.a.createElement("th", null, "Items"))), r.a.createElement("tbody", null, r.a.createElement(j, {
                                    items: a,
                                    itemType: e.title,
                                    filters: e.filters
                                }))))
                            }
                            return r.a.createElement("span", null, r.a.createElement("h2", null, e.title, " (", e.found.length, ")"), r.a.createElement(j, {
                                items: e.found,
                                itemType: e.title,
                                filters: e.filters
                            }))
                        }
                        return ""
                    }

                    function s(e) {
                        var t = a.findIndex(function(t) {
                            return t.name === e
                        });
                        return a[t].checked
                    }
                    return Object.keys(t).length > 0 ? r.a.createElement("div", null, r.a.createElement(n, {
                        title: "Uniques",
                        show: s("uniques"),
                        found: t.uniqueItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Full Sets",
                        show: s("sets"),
                        found: t.fullSetItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Set Items",
                        show: s("sets"),
                        found: t.setItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Runewords",
                        show: s("runewords"),
                        found: t.runewordItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Augments",
                        show: s("augments"),
                        found: t.augmentItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Bases",
                        show: s("bases"),
                        found: t.baseItems,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Charm Components",
                        show: s("charms"),
                        found: t.charmComponents,
                        filters: a
                    }), r.a.createElement(n, {
                        title: "Magic Prefixes/Suffixes",
                        show: s("affixes"),
                        found: t.affixes,
                        filters: a
                    })) : ""
                },
                C = function(e) {
                    function t() {
                        return Object(m.a)(this, t), Object(u.a)(this, Object(p.a)(t).apply(this, arguments))
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.masterItemList,
                                a = e.setMatchedItemList;

                            function n(e, t) {
                                return t = t.toLowerCase(), e.filter(function(e) {
                                    return e.props.some(function(e) {
                                        var a = e[1].toLowerCase();
                                        return i(t = t.toLowerCase()).test(a) || c(t).test(a)
                                    })
                                })
                            }

                            function s(e, t) {
                                return t = t.toLowerCase(), e.filter(function(e) {
                                    return e.props.some(function(e) {
                                        var a = e.toLowerCase();
                                        return i(t).test(a) || c(t).test(a)
                                    })
                                })
                            }

                            function c(e) {
                                var t = "^" + e.split(/\*+/).map(l).join(".*") + "$";
                                return new RegExp(t)
                            }

                            function l(e) {
                                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                            }

                            function i(e) {
                                var t = e.split(/#+/).map(l).join("\\d+");
                                return new RegExp(t)
                            }
                            return r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("form", {
                                className: "itemSearchForm u-full-width",
                                onSubmit: function(e) {
                                    e.preventDefault();
                                    var r, l, m = document.getElementById("searchText").value,
                                        o = {};
                                    o.uniqueItems = n(t.uniqueItems, m), o.runewordItems = n(t.runewordItems, m), o.setItems = function(e, t) {
                                        t = t.toLowerCase();
                                        var a = e.map(function(e) {
                                            return e.items
                                        });
                                        return a.concat.apply([], a).filter(function(e) {
                                            return e.props.some(function(e) {
                                                var a = e[1].toLowerCase();
                                                return i(t).test(a) || c(t).test(a)
                                            })
                                        })
                                    }(t.setItems, m), o.fullSetItems = (r = t.setItems, l = (l = m).toLowerCase(), r.filter(function(e) {
                                        var t = e.fullProps.some(function(e) {
                                                var t = e.toLowerCase();
                                                return i(l).test(t) || c(l).test(t)
                                            }),
                                            a = e.partialProps.some(function(e) {
                                                var t = e.toLowerCase();
                                                return i(l).test(t) || c(l).test(t)
                                            });
                                        return t || a
                                    })), o.augmentItems = n(t.augmentItems, m), o.baseItems = s(t.baseItems, m), o.charmComponents = n(t.charmComponents, m), o.affixes = s(t.affixes, m), a(o)
                                }
                            }, r.a.createElement("input", {
                                id: "searchText",
                                className: "itemSearch",
                                placeholder: "Search items by their properties",
                                type: "text"
                            }), r.a.createElement("button", {
                                type: "submit"
                            }, "Search"), r.a.createElement("p", null, "Search items by their properties: * are wildcards or # will match any number.")))
                        }
                    }]), t
                }(r.a.Component);
            var x = function(e) {
                var t = e.filters,
                    a = e.toggleCheckboxState,
                    n = e.toggleWeaponClick,
                    s = t.map(function(e) {
                        var t = "item-filter ".concat(e.name, "-filter ").concat(e.checked ? "item-filter-selected" : "");
                        return "weapon-left" === e.name || "weapon-right" === e.name ? r.a.createElement("button", {
                            onClick: n,
                            key: e.name,
                            name: e.name,
                            className: t
                        }) : "one-hand" !== e.name && "two-hand" !== e.name ? r.a.createElement("button", {
                            onClick: a,
                            key: e.name,
                            name: e.name,
                            className: t
                        }) : void 0
                    });
                return r.a.createElement("div", {
                    className: "filter three columns"
                }, r.a.createElement("h5", {
                    className: "item-name diablo_unique"
                }, "Item Filters"), r.a.createElement("p", null, "Select an inventory slot to show/hide items for that slot."), r.a.createElement("div", {
                    className: "inventory-filter"
                }, s))
            };
            var O = function(e) {
                var t = e.filters,
                    a = e.toggleCheckboxState,
                    n = e.toggleWeaponClick;

                function s(e) {
                    var t = e.filters,
                        a = e.type,
                        s = e.toggleCheckboxState,
                        c = t.map(function(e) {
                            return r.a.createElement("label", {
                                key: e.name
                            }, r.a.createElement("input", {
                                type: "checkbox",
                                name: e.name,
                                checked: e.checked,
                                onChange: s
                            }), " ", e.label)
                        });
                    return "category" === a ? r.a.createElement("div", null) : "quality" === a ? r.a.createElement("div", {
                        className: "filter three columns"
                    }, r.a.createElement("h5", {
                        className: "item-name diablo_unique"
                    }, "Item Types"), c) : "slot" === a ? r.a.createElement(x, {
                        toggleCheckboxState: s,
                        filters: t,
                        toggleWeaponClick: n
                    }) : r.a.createElement("div", {
                        className: "filter three columns"
                    }, c)
                }
                var c = function() {
                    var e = [];
                    return t.forEach(function(t) {
                        e.includes(t.type) || e.push(t.type)
                    }), e
                }().map(function(e) {
                    var c = t.filter(function(t) {
                        return t.type === e
                    });
                    return r.a.createElement(s, {
                        key: e,
                        type: e,
                        filters: c,
                        toggleCheckboxState: a,
                        toggleWeaponClick: n
                    })
                });
                return r.a.createElement(r.a.Fragment, null, c)
            };
            var S = function(e) {
                    var t = e.filters,
                        a = e.showFilters,
                        n = e.toggleFilterCheckbox,
                        s = e.toggleFilterBar,
                        c = e.toggleWeaponClick,
                        l = a ? "Hide Filters" : "Show Filters";
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, r.a.createElement("button", {
                        onClick: s
                    }, l)), a && r.a.createElement(O, {
                        filters: t,
                        toggleCheckboxState: n,
                        toggleWeaponClick: c
                    }))
                },
                L = function(e) {
                    function t() {
                        var e, a;
                        Object(m.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                        return (a = Object(u.a)(this, (e = Object(p.a)(t)).call.apply(e, [this].concat(r)))).state = {
                            masterItemList: {},
                            matchedItemList: {},
                            filters: [],
                            showFilters: !1
                        }, a.toggleFilterCheckbox = function(e) {
                            var t = Object(i.a)(a.state.filters),
                                n = t.findIndex(function(t) {
                                    return t.name === e.target.name
                                });
                            if (t[n].checked = !t[n].checked, "ring-left" === e.target.name) {
                                var r = t.findIndex(function(e) {
                                    return "ring-right" === e.name
                                });
                                t[r].checked = !t[r].checked
                            }
                            if ("ring-right" === e.target.name) {
                                var s = t.findIndex(function(e) {
                                    return "ring-left" === e.name
                                });
                                t[s].checked = !t[s].checked
                            }
                            a.setState({
                                filters: t
                            })
                        }, a.toggleWeaponClick = function(e) {
                            a.toggleFilterCheckbox(e);
                            var t = Object(i.a)(a.state.filters),
                                n = t[t.findIndex(function(e) {
                                    return "weapon-left" === e.name
                                })],
                                r = t[t.findIndex(function(e) {
                                    return "weapon-right" === e.name
                                })],
                                s = t[t.findIndex(function(e) {
                                    return "one-hand" === e.name
                                })],
                                c = t[t.findIndex(function(e) {
                                    return "two-hand" === e.name
                                })];
                            n.checked || r.checked || (s.checked = !1, c.checked = !1), n.checked && !r.checked && (s.checked = !0, c.checked = !1), !n.checked && r.checked && (s.checked = !0, c.checked = !1), n.checked && r.checked && (s.checked = !0, c.checked = !0), a.setState({
                                filters: t
                            })
                        }, a.getIsTypeFilterChecked = function(e) {
                            var t = Object(i.a)(a.state.typeFilters),
                                n = t.findIndex(function(t) {
                                    return t.name === e
                                });
                            return t[n].checked
                        }, a.setMatchedItemList = function(e) {
                            a.setState({
                                matchedItemList: e
                            })
                        }, a.updateFilteredBaseItems = function() {
                            var e = !1,
                                t = a.state,
                                n = t.baseItems,
                                r = t.selectedFilters,
                                s = n.filter(function(t) {
                                    return e = !1, r.forEach(function(a) {
                                        t.category === a && (e = !0), t.subCategories.includes(a) && (e = !0)
                                    }), e
                                });
                            a.setState({
                                filteredBaseItems: s
                            })
                        }, a.toggleFilterBar = function(e) {
                            var t = a.state.showFilters;
                            a.setState({
                                showFilters: !t
                            })
                        }, a
                    }
                    return Object(h.a)(t, e), Object(o.a)(t, [{
                        key: "componentWillMount",
                        value: function() {
                            var e = this;
                            fetch("/js/uniqueItems.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.uniqueItems = t, e.setState({
                                    masterItemList: a
                                })
                            }), fetch("/js/setItems.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.setItems = t, e.setState({
                                    masterItemList: a
                                })
                            }), fetch("/js/runewords.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.runewordItems = t, e.setState({
                                    masterItemList: a
                                })
                            }), fetch("/js/augments.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.augmentItems = t, e.setState({
                                    masterItemList: a
                                })
                            }), fetch("/js/baseItems.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.baseItems = t, e.setState({
                                    masterItemList: a
                                }), a.baseItems.forEach(function(e) {
                                    return e.itemType
                                })
                            }), fetch("/js/charmComponents.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.charmComponents = t, e.setState({
                                    masterItemList: a
                                })
                            }), fetch("/js/affixes.json").then(function(e) {
                                return e.json()
                            }).then(function(t) {
                                var a = Object(l.a)({}, e.state.masterItemList);
                                a.affixes = t, e.setState({
                                    masterItemList: a
                                })
                            });
                            var t = Object(i.a)(this.state.filters);
                            t.push({
                                type: "quality",
                                name: "uniques",
                                label: "Uniques",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "sets",
                                label: "Sets",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "runewords",
                                label: "Runewords",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "augments",
                                label: "Augments",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "bases",
                                label: "Bases",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "charms",
                                label: "Charm Components",
                                checked: !0
                            }), t.push({
                                type: "quality",
                                name: "affixes",
                                label: "Magic Prefixes/Suffixes",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "helm",
                                label: "Helm",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "amulet",
                                label: "Amulet",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "armor",
                                label: "Armor",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "weapon-left",
                                label: "Left Hand",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "weapon-right",
                                label: "Right Hand",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "belt",
                                label: "Belt",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "ring-left",
                                label: "Ring",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "ring-right",
                                label: "Ring",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "gloves",
                                label: "Gloves",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "boots",
                                label: "Boots",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "one-hand",
                                label: "One-Hand",
                                checked: !0
                            }), t.push({
                                type: "slot",
                                name: "two-hand",
                                label: "Two-Hand",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "weapons",
                                label: "Weapons",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "quivers",
                                label: "Quivers",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "armors",
                                label: "Armors",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "shields",
                                label: "Shields",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "necromancer-shields",
                                label: "Necromancer Shields",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "paladin-shields",
                                label: "Paladin Shields",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "helms",
                                label: "Helms",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "gloves",
                                label: "Gloves",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "belts",
                                label: "Belts",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "boots",
                                label: "Boots",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "rings",
                                label: "Rings",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "amulets",
                                label: "Amulets",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "jewels",
                                label: "Jewels",
                                checked: !0
                            }), t.push({
                                type: "category",
                                name: "charms",
                                label: "Charms",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Barbarian Item",
                                label: "Barbarian Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Paladin Item",
                                label: "Paladin Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Necromancer Item",
                                label: "Necromancer Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Assassin Item",
                                label: "Assassin Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Druid Item",
                                label: "Druid Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Amazon Item",
                                label: "Amazon Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Sorceress Item",
                                label: "Sorceress Items",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Missile Weapon",
                                label: "Missile Weapons",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Caster Weapon",
                                label: "Caster Weapons",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Melee Weapon",
                                label: "Melee Weapons",
                                checked: !0
                            }), t.push({
                                type: "subcategory",
                                name: "Shields",
                                label: "Any Shield",
                                checked: !0
                            }), this.setState({
                                filters: t
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement(C, {
                                masterItemList: this.state.masterItemList,
                                setMatchedItemList: this.setMatchedItemList
                            })), r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement(S, {
                                filters: this.state.filters,
                                showFilters: this.state.showFilters,
                                toggleFilterCheckbox: this.toggleFilterCheckbox,
                                toggleFilterBar: this.toggleFilterBar,
                                toggleWeaponClick: this.toggleWeaponClick
                            })), r.a.createElement("div", {
                                className: "row"
                            }, r.a.createElement(N, {
                                matchedItemList: this.state.matchedItemList,
                                filters: this.state.filters
                            })))
                        }
                    }]), t
                }(n.Component);
            c.a.render(r.a.createElement(L, null), document.getElementById("root"))
        }
    },
    [
        [10, 1, 2]
    ]
]);
//# sourceMappingURL=main.749f936a.chunk.js.map