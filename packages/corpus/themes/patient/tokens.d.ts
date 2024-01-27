/**
 * Do not edit directly
 * Generated on Tue, 23 Jan 2024 20:41:10 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "component": {
    "accordion": {
      "base": {
        "iconSize": DesignToken,
        "gap": DesignToken,
        "paddingX": DesignToken,
        "typography": DesignToken
      },
      "status": {
        "expanded": {
          "default": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "hover": {
            "background": DesignToken,
            "foreground": DesignToken
          }
        },
        "collapsed": {
          "default": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "hover": {
            "background": DesignToken,
            "foreground": DesignToken
          }
        }
      }
    },
    "button": {
      "base": {
        "borderRadius": DesignToken,
        "typography": DesignToken,
        "focusRing": DesignToken
      },
      "variants": {
        "intent": {
          "primary": {
            "default": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "hover": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "focused": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "active": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "disabled": {
              "background": DesignToken,
              "foreground": DesignToken
            }
          },
          "standard": {
            "default": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "hover": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "focused": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "active": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "disabled": {
              "background": DesignToken,
              "foreground": DesignToken
            }
          },
          "outline": {
            "default": {
              "background": DesignToken,
              "foreground": DesignToken,
              "border": DesignToken
            },
            "hover": {
              "background": DesignToken,
              "foreground": DesignToken,
              "border": DesignToken
            },
            "focused": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "active": {
              "background": DesignToken,
              "foreground": DesignToken,
              "border": DesignToken
            },
            "disabled": {
              "background": DesignToken,
              "foreground": DesignToken,
              "border": DesignToken
            }
          },
          "plain": {
            "default": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "hover": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "focused": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "active": {
              "background": DesignToken,
              "foreground": DesignToken
            },
            "disabled": {
              "background": DesignToken,
              "foreground": DesignToken
            }
          }
        },
        "size": {
          "large": {
            "paddingLeft": DesignToken,
            "paddingRight": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken,
            "iconSize": DesignToken
          },
          "medium": {
            "paddingLeft": DesignToken,
            "paddingRight": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken,
            "iconSize": DesignToken
          },
          "small": {
            "paddingLeft": DesignToken,
            "paddingRight": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken,
            "iconSize": DesignToken,
            "typography": DesignToken
          }
        }
      },
      "compoundVariants": {
        "simple-intent-size": {
          "true-plain-all": {
            "paddingRight": DesignToken,
            "paddingLeft": DesignToken
          }
        },
        "startIcon-size": {
          "true-large": {
            "paddingLeft": DesignToken
          },
          "true-medium": {
            "paddingLeft": DesignToken
          },
          "true-small": {
            "paddingLeft": DesignToken
          }
        },
        "onlyIcon-size": {
          "true-large": {
            "paddingRight": DesignToken,
            "paddingLeft": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken
          },
          "true-medium": {
            "paddingRight": DesignToken,
            "paddingLeft": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken
          },
          "true-small": {
            "paddingRight": DesignToken,
            "paddingLeft": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken
          }
        },
        "endIcon-size": {
          "true-large": {
            "paddingRight": DesignToken
          },
          "true-medium": {
            "paddingRight": DesignToken
          },
          "true-small": {
            "paddingRight": DesignToken
          }
        }
      }
    },
    "placeholder": {
      "base": {
        "background": DesignToken,
        "highlightColor": DesignToken
      }
    },
    "chat": {
      "message": {
        "base": {
          "typography": DesignToken,
          "timestampTypography": DesignToken,
          "paddingX": DesignToken,
          "paddingY": DesignToken,
          "gap": DesignToken,
          "borderRadius": DesignToken,
          "borderRadiusAnchor": DesignToken,
          "foreground": DesignToken
        },
        "variants": {
          "type": {
            "incoming": {
              "background": DesignToken
            },
            "outgoing": {
              "background": DesignToken
            }
          },
          "firstInGroup": {
            "true": {
              "borderEndStartRadius": DesignToken
            }
          },
          "middleInGroup": {
            "true": {
              "borderStartStartRadius": DesignToken,
              "borderEndStartRadius": DesignToken
            }
          },
          "lastInGroup": {
            "true": {
              "borderStartStartRadius": DesignToken
            }
          }
        }
      },
      "messageGroup": {
        "base": {
          "width": DesignToken,
          "mobileWidth": DesignToken,
          "paddingY": DesignToken,
          "gapY": DesignToken,
          "gapX": DesignToken
        }
      }
    },
    "form": {
      "formField": {
        "label": {
          "default": {
            "foreground": DesignToken
          },
          "disabled": {
            "foreground": DesignToken
          },
          "typography": DesignToken
        },
        "helpText": {
          "default": {
            "foreground": DesignToken
          },
          "disabled": {
            "foreground": DesignToken
          },
          "error": {
            "foreground": DesignToken
          },
          "typography": DesignToken
        },
        "base": {
          "gap": DesignToken,
          "typography": DesignToken
        }
      },
      "input": {
        "base": {
          "default": {
            "placeholderForeground": DesignToken,
            "iconForeground": DesignToken,
            "borderRadius": DesignToken,
            "borderWidth": DesignToken,
            "foreground": DesignToken,
            "borderColor": DesignToken,
            "background": DesignToken
          },
          "active": {
            "foreground": DesignToken,
            "borderColor": DesignToken,
            "background": DesignToken
          },
          "disabled": {
            "foreground": DesignToken,
            "borderColor": DesignToken,
            "background": DesignToken
          },
          "hover": {
            "borderColor": DesignToken
          },
          "focused": {
            "borderColor": DesignToken
          },
          "error": {
            "borderWidth": DesignToken,
            "borderColor": DesignToken
          }
        },
        "variants": {
          "size": {
            "small": {
              "paddingX": DesignToken,
              "paddingY": DesignToken,
              "gap": DesignToken
            },
            "medium": {
              "paddingX": DesignToken,
              "paddingY": DesignToken,
              "gap": DesignToken
            },
            "large": {
              "paddingX": DesignToken,
              "paddingY": DesignToken,
              "gap": DesignToken
            }
          }
        }
      },
      "select": {
        "hover": {
          "borderColor": DesignToken,
          "background": DesignToken
        },
        "pressed": {
          "borderColor": DesignToken,
          "background": DesignToken
        }
      },
      "checkbox-radio": {
        "label": {
          "default": {
            "gap": DesignToken,
            "foreground": DesignToken,
            "background": DesignToken,
            "paddingY": DesignToken,
            "paddingX": DesignToken
          },
          "hover": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "focused": {
            "borderWidth": DesignToken,
            "borderColor": DesignToken,
            "background": DesignToken,
            "foreground": DesignToken
          },
          "disabled": {
            "foreground": DesignToken
          }
        },
        "box": {
          "default": {
            "borderColor": DesignToken,
            "borderWidth": DesignToken,
            "borderRadius": DesignToken,
            "background": DesignToken,
            "size": DesignToken
          },
          "hover": {
            "borderColor": DesignToken,
            "background": DesignToken
          },
          "disabled": {
            "borderColor": DesignToken,
            "background": DesignToken
          },
          "checked": {
            "borderColor": DesignToken,
            "background": DesignToken,
            "foreground": DesignToken
          },
          "checked-disabled": {
            "borderColor": DesignToken,
            "foreground": DesignToken,
            "background": DesignToken
          }
        },
        "group": {
          "gapX": DesignToken,
          "gapY": DesignToken
        }
      }
    },
    "common": {
      "focusRing": {
        "borderWidth": DesignToken,
        "borderColor": DesignToken
      }
    },
    "panel": {
      "base": {
        "borderRadius": DesignToken,
        "background": DesignToken,
        "foregroundPrimary": DesignToken,
        "foregroundSecondary": DesignToken,
        "scrim": DesignToken
      },
      "variants": {
        "density": {
          "compact": {
            "paddingX": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken
          },
          "regular": {
            "paddingX": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken
          },
          "comfortable": {
            "paddingX": DesignToken,
            "paddingTop": DesignToken,
            "paddingBottom": DesignToken,
            "gap": DesignToken
          }
        }
      }
    },
    "list": {
      "listItem": {
        "base": {
          "default": {
            "background": DesignToken,
            "foreground": DesignToken,
            "foregroundQuiet": DesignToken
          },
          "hover": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "active": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "disabled": {
            "background": DesignToken,
            "foreground": DesignToken
          }
        },
        "variants": {
          "density": {
            "comfortable": {
              "paddingX": DesignToken,
              "paddingY": DesignToken,
              "gap": DesignToken
            },
            "compact": {
              "paddingX": DesignToken,
              "paddingY": DesignToken,
              "gap": DesignToken
            }
          }
        }
      },
      "columnHeader": {
        "paddingY": DesignToken,
        "background": DesignToken,
        "foreground": DesignToken,
        "typography": DesignToken
      }
    },
    "page": {
      "background": DesignToken
    },
    "menu": {
      "list": {
        "paddingY": DesignToken,
        "background": DesignToken,
        "borderRadius": DesignToken
      },
      "separator": {
        "height": DesignToken,
        "background": DesignToken
      },
      "sectionHeading": {
        "paddingX": DesignToken,
        "paddingY": DesignToken,
        "background": DesignToken,
        "foreground": DesignToken
      },
      "item": {
        "default": {
          "paddingX": DesignToken,
          "paddingY": DesignToken,
          "gap": DesignToken,
          "background": DesignToken,
          "foreground": DesignToken
        },
        "hover": {
          "background": DesignToken,
          "foreground": DesignToken
        },
        "active": {
          "background": DesignToken,
          "foreground": DesignToken
        },
        "focused": {
          "background": DesignToken,
          "foreground": DesignToken
        },
        "disabled": {
          "background": DesignToken,
          "foreground": DesignToken
        }
      }
    },
    "tabs": {
      "tabBar": {
        "base": {
          "gap": DesignToken,
          "background": DesignToken
        },
        "variants": {
          "inline": {
            "true": {
              "background": DesignToken
            }
          }
        }
      },
      "tab": {
        "base": {
          "default": {
            "background": DesignToken,
            "foreground": DesignToken,
            "paddingY": DesignToken
          },
          "hover": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "active": {
            "foreground": DesignToken,
            "borderColor": DesignToken,
            "hover": {
              "foreground": DesignToken,
              "borderColor": DesignToken
            }
          }
        },
        "variants": {
          "inline": {
            "true": {
              "default": {
                "paddingX": DesignToken,
                "paddingY": DesignToken
              }
            }
          }
        }
      }
    },
    "badge": {
      "base": {
        "borderRadius": DesignToken,
        "paddingX": DesignToken,
        "paddingY": DesignToken,
        "gap": DesignToken,
        "iconSize": DesignToken
      },
      "variants": {
        "intent": {
          "success": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "success-quiet": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "warning": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "warning-quiet": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "alert": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "alert-quiet": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "info": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "info-quiet": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "neutral": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "neutral-quiet": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "u1": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "u2": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "u3": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "u4": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "u5": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "uc": {
            "background": DesignToken,
            "foreground": DesignToken
          },
          "ucth": {
            "background": DesignToken,
            "foreground": DesignToken
          }
        },
        "startIcon": {
          "true": {
            "paddingLeft": DesignToken
          }
        },
        "endIcon": {
          "true": {
            "paddingRight": DesignToken
          }
        }
      }
    },
    "notifications": {
      "toast": {
        "base": {
          "borderRadius": DesignToken,
          "borderWidth": DesignToken,
          "minWidth": DesignToken,
          "maxWidth": DesignToken,
          "iconSize": DesignToken,
          "paddingX": DesignToken,
          "paddingY": DesignToken,
          "gap": DesignToken,
          "background": DesignToken,
          "foreground": DesignToken
        },
        "variants": {
          "intent": {
            "info": {
              "borderColor": DesignToken,
              "background": DesignToken,
              "iconColor": DesignToken,
              "foreground": DesignToken
            },
            "success": {
              "borderColor": DesignToken,
              "background": DesignToken,
              "iconColor": DesignToken,
              "foreground": DesignToken
            },
            "warning": {
              "borderColor": DesignToken,
              "background": DesignToken,
              "iconColor": DesignToken,
              "foreground": DesignToken
            },
            "error": {
              "borderColor": DesignToken,
              "background": DesignToken,
              "iconColor": DesignToken,
              "foreground": DesignToken
            },
            "neutral": {
              "borderColor": DesignToken,
              "background": DesignToken,
              "iconColor": DesignToken,
              "foreground": DesignToken
            }
          }
        }
      }
    },
    "emptyState": {
      "base": {
        "imageSize": DesignToken,
        "elementGap": DesignToken,
        "textGap": DesignToken,
        "foreground": DesignToken,
        "maxWidth": DesignToken,
        "paddingBottom": DesignToken,
        "titleTypography": DesignToken,
        "bodyTypography": DesignToken
      }
    },
    "fileUpload": {
      "base": {
        "borderRadius": DesignToken,
        "contentGap": DesignToken,
        "contenetWidth": DesignToken,
        "iconSize": DesignToken,
        "removeButtonGap": DesignToken,
        "typography": DesignToken
      },
      "filePicker": {
        "default": {
          "background": DesignToken,
          "foreground": DesignToken,
          "borderColor": DesignToken
        },
        "hover": {
          "background": DesignToken,
          "foreground": DesignToken,
          "borderColor": DesignToken
        }
      }
    },
    "datePicker": {
      "weekdayItem": {
        "typography": DesignToken,
        "foreground": DesignToken,
        "height": DesignToken
      },
      "dateItem": {
        "base": {
          "borderRadius": DesignToken,
          "typography": DesignToken
        },
        "default": {
          "background": DesignToken,
          "backgroundToday": DesignToken,
          "foreground": DesignToken
        },
        "hover": {
          "background": DesignToken,
          "foreground": DesignToken
        },
        "focused": {
          "background": DesignToken,
          "foreground": DesignToken,
          "borderColor": DesignToken
        },
        "active": {
          "background": DesignToken,
          "foreground": DesignToken
        },
        "disabled": {
          "background": DesignToken,
          "foreground": DesignToken
        }
      },
      "item": {
        "focused": {
          "borderWidth": DesignToken
        }
      },
      "calendar": {
        "base": {
          "background": DesignToken,
          "width": DesignToken,
          "minWidth": DesignToken,
          "maxWidth": DesignToken,
          "height": DesignToken,
          "maxHeight": DesignToken,
          "minHeight": DesignToken
        },
        "variants": {
          "inline": {
            "borderRadius": DesignToken
          },
          "pop-up": {
            "borderRadius": DesignToken
          }
        },
        "pop-up": {
          "elevation": DesignToken
        }
      }
    },
    "counter": {
      "minWidth": DesignToken,
      "minHeight": DesignToken,
      "background": DesignToken,
      "foreground": DesignToken,
      "borderRadius": DesignToken,
      "typography": DesignToken,
      "paddingX": DesignToken
    }
  },
  "typography": {
    "title": {
      "title1": DesignToken,
      "title2": DesignToken,
      "title3": DesignToken
    },
    "header": {
      "h1": DesignToken,
      "h1Mobile": DesignToken,
      "h2": DesignToken,
      "h2Mobile": DesignToken,
      "h3": DesignToken,
      "h4": DesignToken
    },
    "body": {
      "body1": {
        "regular": DesignToken,
        "underline": DesignToken,
        "bold": DesignToken,
        "italic": DesignToken
      },
      "body2": {
        "regular": DesignToken,
        "regular-copy": DesignToken,
        "bold": DesignToken,
        "italic": DesignToken
      },
      "body3": {
        "regular": DesignToken,
        "underline": DesignToken,
        "bold": DesignToken,
        "italic": DesignToken
      }
    },
    "button": {
      "btn1": DesignToken,
      "btn2": DesignToken,
      "link1": DesignToken,
      "link2": DesignToken
    },
    "overline": {
      "overline1": DesignToken
    },
    "tag": {
      "tag1": DesignToken,
      "tag2": DesignToken
    }
  },
  "color": {
    "palette": {
      "primary": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "neutral": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "accent": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "success": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "warning": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "error": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      },
      "white": DesignToken,
      "black": DesignToken,
      "secondary": {
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      }
    },
    "background": {
      "solid": DesignToken,
      "gradient": DesignToken,
      "scrim": DesignToken
    },
    "brand": {
      "magicMintDark": DesignToken,
      "magicMintDark200": DesignToken,
      "magicMintDark300": DesignToken,
      "magicMintSemiDark": DesignToken,
      "magicMint": DesignToken,
      "magicMint60": DesignToken,
      "magicMint45": DesignToken,
      "magicMint30": DesignToken,
      "magicMint15": DesignToken,
      "deepKoamaru": DesignToken,
      "deepKoamaru90": DesignToken,
      "deepKoamaru80": DesignToken,
      "deepKoamaru60": DesignToken,
      "deepKoamaru30": DesignToken,
      "deepKoamaru15": DesignToken,
      "deepKoamaru5": DesignToken,
      "activeBlue": DesignToken,
      "verdigris": DesignToken,
      "alert100": DesignToken,
      "alert60": DesignToken,
      "alert30": DesignToken,
      "alert15": DesignToken,
      "warning100": DesignToken,
      "warning90": DesignToken,
      "coralRed100": DesignToken,
      "coralRed60": DesignToken,
      "coralRed30": DesignToken,
      "coralRed15": DesignToken,
      "seaShell": DesignToken,
      "seaShell60": DesignToken,
      "seaShell40": DesignToken,
      "seaShell30": DesignToken,
      "seaShell20": DesignToken,
      "unbleachedSilk": DesignToken,
      "unbleachedSilk60": DesignToken,
      "unbleachedSilk30": DesignToken,
      "unbleachedSilk15": DesignToken,
      "virusViolet": DesignToken,
      "virusViolet60": DesignToken,
      "virusViolet30": DesignToken,
      "virusViolet15": DesignToken
    },
    "opacity": {
      "neutral": {
        "0": DesignToken,
        "50": DesignToken,
        "100": DesignToken,
        "200": DesignToken,
        "300": DesignToken,
        "400": DesignToken,
        "500": DesignToken,
        "600": DesignToken,
        "700": DesignToken,
        "800": DesignToken,
        "900": DesignToken
      }
    },
    "text": {
      "emphasized": DesignToken,
      "primary": DesignToken,
      "secondary": DesignToken,
      "subtle": DesignToken,
      "dimmed": DesignToken,
      "success": DesignToken,
      "error": DesignToken,
      "white": DesignToken,
      "warning": DesignToken
    }
  },
  "spacing": {
    "xxxs": DesignToken,
    "xxs": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "xxl": DesignToken,
    "xxxl": DesignToken,
    "xxxxl": DesignToken,
    "xxxxxl": DesignToken
  },
  "fontWeight": {
    "regular": DesignToken,
    "bold": DesignToken,
    "medium": DesignToken,
    "semiBold": DesignToken,
    "italic": DesignToken
  },
  "lineHeight": {
    "xxs": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "xxl": DesignToken
  },
  "fontSize": {
    "xs": DesignToken,
    "sm": DesignToken,
    "base": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "xxl": DesignToken,
    "xxxl": DesignToken,
    "xxxxl": DesignToken,
    "xxxxxl": DesignToken
  },
  "letterSpacing": {
    "tight": DesignToken,
    "normal": DesignToken,
    "wide": DesignToken
  },
  "letterCase": {
    "none": DesignToken,
    "uppercase": DesignToken
  },
  "textDecoration": {
    "none": DesignToken,
    "underline": DesignToken
  },
  "borderRadius": {
    "sharp": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "round": DesignToken
  },
  "fontFamily": {
    "main": DesignToken,
    "brand": DesignToken
  },
  "borderWidth": {
    "regular": DesignToken,
    "medium": DesignToken,
    "large": DesignToken,
    "none": DesignToken
  },
  "elevation": {
    "low": DesignToken,
    "medium": DesignToken,
    "high": DesignToken
  },
  "sizing": {
    "general": {
      "xxxs": DesignToken,
      "xxs": DesignToken,
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "xxl": DesignToken,
      "xxxl": DesignToken
    },
    "iconSize": {
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken
    }
  },
  "breakpoint": {
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "xxl": DesignToken
  },
  "layer": {
    "modal": DesignToken,
    "drawer": DesignToken,
    "popover": DesignToken,
    "toasts": DesignToken,
    "tooltip": DesignToken,
    "appBar": DesignToken
  },
  "border": {
    "focus": DesignToken,
    "standard": DesignToken
  },
  "opacity": {
    "0": DesignToken,
    "10": DesignToken,
    "20": DesignToken,
    "30": DesignToken,
    "40": DesignToken,
    "50": DesignToken,
    "60": DesignToken,
    "70": DesignToken,
    "80": DesignToken,
    "90": DesignToken,
    "100": DesignToken
  }
}
