export default {
  route: {
    adminPortal: 'ADMIN PORTAL',
    dashboard: 'Dashboard',
    warmup: 'Warm Up',
    userInfo: 'User Info',
    productInfo: 'Product Info',
    createProduct: 'Create Product',
    editProduct: 'Edit Product',
    productList: 'Product List',
    serviceInfo: 'Service Info',
    createService: 'Create Service',
    editService: 'Edit Service',
    serviceList: 'Service List',
    accessInfo: 'Access Info',
    createAccessInfo: 'Create Access Info',
    editAccessInfo: 'Edit Access Info',
    accessInfoList: 'Access Info List',
    Ppsupport: 'Passport Support',
    PpsupportGetProfile: 'Get Profile',
    PpsupportAdminGetProfile: 'User Profile',
    BillingtoolLookup: 'Lookup',
    BillingtoolOrderInfo: 'Get Order Info',
    BillingtoolProductInfo: 'Get Product Info',
    Webpayment: 'Webpayment',
    WebpaymentConfig: 'Configuration',
    WebpaymentPlatform: 'Platform',
    WebpaymentApp: 'Application',
    WebpaymentAppList: 'Application List',
    WebpaymentAppCreate: 'Create Application',
    WebpaymentAppEdit: 'Edit Application',
    WebpaymentPayment: 'Payment',
    WebpaymentPaymentList: 'Payment List',
    WebpaymentPaymentCreate: 'Create Payment',
    WebpaymentPaymentEdit: 'Edit Payment',
    WebpaymentShopfront: 'Shopfront',
    WebpaymentShopfrontList: 'Shopfront List',
    WebpaymentShopfrontCreate: 'Create Shopfront',
    WebpaymentShopfrontEdit: 'Edit Shopfront',
    WebpaymentShopfrontDetail: 'Shopfront Detail',
    Serverinfo: 'Server Information',
    ServerinfoListServer: 'Server List',
    ServerinfoProduct: 'Product',
    ServerinfoProductSDK: 'Product GT',
    ServerinfoVlan: 'Vlan',
    Ticket: 'Ticket',
    TicketProduct: 'Product',
    TicketType: 'Type',
    TicketList: 'Ticket List',
    TicketCreate: 'Create Ticket',
    TicketDetail: 'Ticket detail',
    TicketAdmin: 'Admin portal',
    TicketStepCreate: 'Create step',
    TicketStepEdit: 'Edi step',
    TicketStepList: 'Step',
    Appgw: 'App GW',
    ContentService: 'Content service'
  },
  login: {
    capsLockOn: 'Caps lock is on',
    submit: 'Submit',
    sso: 'Login with O365',
    loginTitle: {
      ldap: 'GT Ldap (GT only)'
    },
    notice: 'If u have any issue, please contact to RiLT or mail to gt.framework@vng.com.vn',
    placeholder: {
      username: 'Domain',
      password: 'Password'
    },
    error: {
      username: 'Please input your domain',
      password: 'Please input password'
    }
  },
  dashboard: {
    admin: {
      warmup: {
        database: 'Warmup Database',
        service: 'Warmup Service',
        confirmWarmup: 'Do you wanna warm up <b>%s</b>?'
      },
      staticstic: {
        title: 'Staticstic'
      }
    },
    feedback: {
      button: 'Feedback',
      thankful: 'Your feedback is the best motivation for me to improve product. Thanks so much!',
      title: "User's feedback",
      titleNew: 'Feedback',
      placeholderSearching: 'Input domain to search',
      subject: 'Subject',
      content: 'Content'
    }
  },
  adminProductInfo: {
    id: 'Product ID',
    productName: 'Product Name',
    faCode: 'FA Code',
    pm: 'PM',
    po: 'PO',
    seo: 'SEO',
    deptHead: 'Dept Head',
    productKey: 'Product key',
    deptOwner: 'Dept Owner',
    prodType: 'Type',
    prodMarket: 'Market',
    prodStatus: 'Status',
    status: 'Status',
    operationContact: 'Operation contact',
    estRanking: 'Ranking',
    prodOpenDate: 'Open Date',
    prodCloseDate: 'Close Date',
    alertDataExisted: 'Product <b>%s</b> is existed',
    alertDataNotExisted: 'Product <b>%s</b> is not existed',
    placeholderSearching: 'Input product name or product id to search',
    placeholder: {
      pm: 'Project Manager',
      po: 'Product Operation',
      seo: 'Software Engineer Owner',
      deptHead: 'Head of department',
      deptOwner: 'Department owner',
      prodType: 'Product type',
      prodInfo: 'Search by productID | FaCode',
      prodMarket: 'Product release market',
      prodOpenDate: 'Open date',
      prodCloseDate: 'Close date'
    },
    step: {
      productInfo: 'Product Information',
      productDetail: 'Product Detail'
    }
  },
  adminServiceInfo: {
    prodMappingFaCode: 'FA Code',
    prodMappingMarket: 'Market',
    prodMappingId: 'Mapping product id',
    prodMappingName: 'Mapping product name',
    extInfo: 'External information',
    id: 'Service Id',
    name: 'Service Name',
    allService: 'ALL SERVICES',
    contactPoint: 'Contact',
    serviceApis: 'Service Apis',
    serviceApps: 'Service Apps',
    description: 'Description',
    serviceJar: 'Service Jar',
    serviceClass: 'Service Class',
    serviceConfig: 'Configuration',
    serviceInfo: 'Information',
    serviceStatus: 'Status',
    serviceMaintenance: 'Maintenance',
    placeholderSearching: 'Input service name or service id to search',
    signSecretKey: 'Secret Key',
    authSignType: 'Sign Type',
    alertDataExisted: 'Service <b>%s</b> is existed',
    alertServiceAppExisted: 'App <b>%s</b> is existed',
    alertDataNotExisted: 'Service <b>%s</b> is not existed!',
    apiLink: 'Api Link',
    verifyData: 'Validation',
    useCustomProxy: 'Proxy',
    requestTimeout: 'Time Out',
    editExtParams: 'Edit ExtParams',
    productList: 'Product',
    editMappingProductInfo: 'Mapping Product Information ',
    useMappingProduct: 'Using product and mapping product with ',
    mappingProductSelected: 'Product selected',
    mappingProductNotSelected: 'Product do not selected',
    step: {
      serviceInfo: 'Service Information',
      serviceDetail: 'Service Detail',
      serviceMapping: 'Mapping Product'
    },
    placeholder: {
      serviceId: 'Service ID',
      contactPoint: 'Contact Point'
    },
    serviceApiList: 'Service api list',
    serviceAppList: 'Service app list',
    API: {
      serviceApiId: 'API Id',
      name: 'API Name',
      url: 'Url',
      method: 'Method',
      secretKey: 'Secret Key',
      signType: 'Sign Type',
      proxyHost: 'Host',
      proxyPort: 'Port',
      readTimeout: 'Read',
      connectTimeout: 'Connect',
      extParams: 'Params'
    }
  },
  adminAccessInfo: {
    selection: {
      app: 'Grant apps',
      user: 'Grant user',
      service: 'Grant service',
      grantAll: 'GRANT ALL',
      serviceApi: 'Grant API',
      accessType: 'Choose access type'
    },
    hintDefaultGrantService: "Granting access rights for each service and product list. For the type DENY_ALL_ALLOW, please do not leave the product's list blank",
    grantProductServiceError: 'With type DENY_ALL_ALLOW, please fill product access',
    grantServiceError: 'Please choose service for granting',
    messageBoxTitle: 'Granting service and application',
    editAppForAllService: 'Modifing permission of serice and application',
    userId: 'User ID',
    serviceId: 'Service ID',
    appAccess: 'Access app ID',
    appNotAccess: 'Do not access app',
    serviceApis: 'Service API',
    accessType: 'Access Type',
    description: 'Description',
    placeholderDescription: 'Something about access info',
    placeholderSearchApp: 'Input product info to search',
    placeholderSearching: 'Input domain or service id to search',
    alertDataExisted: 'User <b>%s</b> was granted for service <b>%s</b>!',
    alertDataNotExisted: "User <b>%s</b> wasn't granted for service <b>%s</b>!"
  },
  userInfo: {
    placeholderSearching: 'Input domain to search',
    name: 'Name',
    email: 'Email',
    phone: 'Phone Number',
    title: 'Title',
    permission: 'Permission',
    department: 'Department',
    confirmUpdateInfo: "Do you wanna update <b>%s</b>'s information?"
  },
  ppsupport: {
    PpsupportGetProfile: 'PASSPORT SUPPORT',
    PpsupportAdminGetProfile: 'PASSPORT SUPPORT - USER PROFILE',
    placeholderSearching: 'Input data for searching',
    placeholderSubmit: 'Ctrl + Enter to submit.',
    instruction: 'Searching for multiple accounts at the same time. Each account is separated by break line.',
    selection: {
      app: 'Choose applicaiton',
      service: 'Choose service'
    },
    appId: 'AppID',
    serviceId: 'Service',
    value: 'Data input'
  },
  billingtool: {
    title: 'BILLING ORDER INFO',
    selection: {
      app: 'Choose applicaiton',
      service: 'Choose service',
      clientKey: 'Choose Client Key',
      paymentMonth: 'Pick a month',
      environment: 'Choose environment',
      clientID: 'Client ID'
    },
    appId: 'AppID',
    serviceId: 'Service',
    clientKey: 'Client Key',
    value: 'Value',
    paymentMonth: 'Month',
    productInfo: 'Product Info',
    environment: 'Environment',
    clientID: 'Client ID'
  },
  webpayment: {
    app: {
      id: 'ID',
      name: 'App name',
      placeholder: {
        id: 'ID',
        name: 'App name',
        contactPoint: 'contactPoint',
        faCode: 'faCode',
        platform: 'platform',
        enable: 'Enable'
      }
    },
    platform: {
      id: 'ID',
      name: 'Platform name',
      enable: 'Enable',
      createPlatform: 'Create Platform',
      placeholderSearching: 'Input platform name or platform id to search'
    },
    shopfront: {
      id: 'ID',
      name: 'Name',
      enable: 'Enable',
      createShopfront: 'Create Shopfront',
      editShopfront: 'Edit Shopfront',
      placeholderSearching: 'Input Shopfront name or Shopfront id to search',
      placeholder: {
        id: 'ID',
        name: 'Shopfront name',
        description: 'Description',
        shopfrontUrl: 'Shopfront Url',
        appID: 'App ID',
        version: 'Version'
      }
    }
  },
  webpaymentOps: {
    placeholderSearching: 'Input to search',
    enviroment: 'Enviroment',
    area: 'Area',
    app: {
      id: 'ID',
      name: 'App Name',
      title: 'Application List',
      detailTitle: 'Application Detail',
      contactPoint: 'Contact Point',
      faCode: 'FA Code',
      platform: 'Platform',
      enable: 'Enable',
      createApp: 'Create Application',
      createBilling: 'Create Billing'
    },
    payment: {
      id: 'ID',
      name: 'Payment name',
      title: 'Payment List',
      enable: 'Enable',
      createPayment: 'Create Payment',
      providerID: 'Provider ID',
      providerName: 'Provider Name',
      gatewayName: 'Gateway Name',
      methodID: 'Method ID',
      methodName: 'Method Name',
      gatewayID: 'Gateway ID'
    },
    shopfront: {
      id: 'ID',
      name: 'Name',
      title: 'Shopfront List',
      createShopfront: 'Create Shopfront',
      editShopfront: 'Edit Shopfront',
      shopfrontID: 'Shopfront ID',
      shopfrontName: 'Shopfront Name',
      clientID: 'Client ID',
      version: 'Version',
      enable: 'Enable'
    }
  },
  serverInfo: {
    serverList: {
      id: 'IP Private',
      name: 'Server List',
      serverNotUpdate: 'Server not update',
      listServerNotUpdate: 'List server not update',
      monitor: {
        clickToView: 'Click to view'
      },
      daySelection: {
        toDay: 'Today',
        prevDay: ' days ago',
        yesterday: 'Yesterday'
      },
      placeholder: {
        location: 'Location',
        product: 'Product',
        vlan: 'Vlan',
        serverType: 'Server Type'
      },
      placeholderSearching: 'Input IP or Host Name to search',
      thead: {
        ipPrivate: 'IP Private',
        hostName: 'Host Name',
        iFaces: 'IFaces',
        product: 'Product',
        vlan: 'VLan',
        serverType: 'Server Type'
      },
      deleteServer: 'This will permanently delete this Server. Continue?',
      warning: 'Warning',
      delSuccess: 'Delete success',
      delCancel: 'Delete cancel'
    },
    product: {
      id: 'Product ID',
      name: 'Product List',
      productName: 'Product Name',
      productStatus: 'Product Status',
      productStatusList: {
        new: 'New',
        inUsed: 'In Used',
        close: 'Close'
      },
      enable: 'Enable',
      createProduct: 'Create Product',
      placeholderSearching: 'Input Product Name to search'
    },
    vlan: {
      id: 'ID',
      name: 'Name',
      enable: 'Enable',
      listVlan: 'Vlan List',
      createVlan: 'Create Vlan',
      editVlan: 'Edit Vlan',
      placeholderSearching: 'Input Vlan name or Vlan ID to search',
      placeholder: {
        id: 'ID',
        name: 'Vlan name',
        description: 'Description'
      }
    },
    productSDK: {
      id: 'Product ID',
      name: 'Product',
      productSDKName: 'Product Name',
      productSDKStatus: 'Product Status',
      listVlanSDK: 'List Vlan',
      enable: 'Enable',
      placeholderSearching: 'Input to search',
      productSDKStatusList: {
        new: 'New',
        inUsed: 'In Used',
        close: 'Close'
      },
      warningStatus: 'Warning: Data has not been updated since'
    }
  },
  ticket: {
    product: {
      id: 'ID',
      name: 'Product name',
      createApp: 'Craete new product',
      placeholder: {
        id: 'Enter product ID',
        name: 'Enter product name'
      },
      productExisted: 'Product  <b>%s</b> is existed'
    },
    step: {
      placeholderSearching: 'Input to search',
      alertDataExisted: 'Template for service <b>%s</b> và type <b>%s</b> is existed!',
      alertDataNotExisted: 'Template for service <b>%s</b> và type <b>%s</b> is not existed!',
      productId: 'Product',
      typeId: 'Type',
      template: 'Template',
      orderStep: 'Order',
      extInfo: 'ExtInfo',
      placeholder: {
        extInfo: 'Input extenal information',
        productId: 'Select product',
        typeId: 'Select type',
        orderStep: 'Step'
      },
      stepExisted: 'Step <b>%s</b>-<b>%s</b> is existed'
    },
    type: {
      id: 'ID',
      name: 'Type name',
      createApp: 'Create new type',
      placeholder: {
        id: 'Enter type id',
        name: 'Enter type name'
      },
      typeExisted: 'Type <b>%s</b> is existed'
    }
  },
  appgw: {
    name: 'App Gateway',
    appID: 'Product',
    serverID: 'Server ID',
    loginType: 'Login Type',
    userID: 'User ID'
  },
  formValidate: {
    required: ' is required'
  },
  status: {
    success: 'Successfully',
    total: 'Total',
    status: 'Status',
    active: 'Active',
    deactive: 'Deactive',
    enable: 'Enable',
    disable: 'Disable',
    dataNotFound: 'Data not found',
    formInvalid: 'Please complete all information',
    loading: 'Loading'
  },
  permission: {
    adminService: 'Admin service',
    admin: 'Admin',
    pqa: 'PQA',
    supervisor: 'Supervisor',
    member: 'User'
  },
  button: {
    backTop: 'Back to top',
    search: 'Search',
    add: 'Add',
    create: 'Create',
    edit: 'Edit',
    delete: 'Delete',
    ok: 'OK',
    cancel: 'Cancel',
    submit: 'Submit',
    warmup: 'Warm Up',
    warmupAll: 'Warm Up All',
    view: 'View',
    nextStep: 'Next step',
    previousStep: 'Back',
    backToHome: 'Back to home',
    exportExcel: 'Export EXCEL',
    clickToSelect: 'Click to select file',
    dropFile: 'Drag file into here',
    detail: 'Detail',
    turnOnMaintain: 'Turn on maintain',
    turnOffMaintain: 'Turn off maintain'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size',
    changeLanguage: 'Change language',
    changeLangSuccess: 'Switch Language Success'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  errorPage: {
    401: {
      title: 'Permission deny',
      contactInfo: 'Please contact tudhm@vng.com.vn for assistance'
    },
    404: {
      title: 'Oops, Something went wrong.',
      detail: 'The connection request to server failed'
    }
  },
  serviceMaintenance: 'Service is maintaining'
}
