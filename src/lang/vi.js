export default {
  route: {
    adminPortal: 'ADMIN PORTAL',
    dashboard: 'Dashboard',
    warmup: 'Warm Up',
    userInfo: 'Người dùng',
    productInfo: 'Sản phẩm',
    createProduct: 'Tạo sản phẩm',
    editProduct: 'Sửa sản phẩm',
    productList: 'Danh sách sản phẩm',
    serviceInfo: 'Dịch vụ',
    createService: 'Tạo dịch vụ',
    editService: 'Sửa dịch vụ',
    serviceList: 'Danh sách dịch vụ',
    accessInfo: 'Quyền truy cập',
    createAccessInfo: 'Gán quyền',
    editAccessInfo: 'Sửa quyền',
    accessInfoList: 'Danh sách quyền',
    Ppsupport: 'Passport Support',
    PpsupportGetProfile: 'Kiếm tra thông tin',
    PpsupportAdminGetProfile: 'Thông tin người dùng',
    BillingtoolLookup: 'Tra cứu thông tin',
    BillingtoolOrderInfo: 'Thông tin đơn hàng',
    BillingtoolProductInfo: 'Thông tin sản phẩm',
    Webpayment: 'Webpayment',
    WebpaymentConfig: 'Cấu hình',
    WebpaymentPlatform: 'Nền tảng ứng dụng',
    WebpaymentApp: 'Ứng dụng',
    WebpaymentAppList: 'Danh sách ứng dụng',
    WebpaymentAppCreate: 'Thêm ứng dụng',
    WebpaymentAppEdit: 'Sửa ứng dụng',
    WebpaymentPayment: 'Thanh toán',
    WebpaymentPaymentList: 'Danh sách Thanh toán',
    WebpaymentPaymentCreate: 'Thêm Thanh toán',
    WebpaymentPaymentEdit: 'Sửa Thanh toán',
    WebpaymentShopfront: 'Trang nạp',
    WebpaymentShopfrontList: 'Danh sách trang nạp',
    WebpaymentShopfrontCreate: 'Thêm trang nạp',
    WebpaymentShopfrontEdit: 'Sửa trang nạp',
    WebpaymentShopfrontDetail: 'Chi tiết trang nạp',
    Serverinfo: 'Thông tin Server',
    ServerinfoListServer: 'Danh sách Server',
    ServerinfoProduct: 'Sản Phẩm',
    ServerinfoProductSDK: 'Sản Phẩm GT',
    ServerinfoVlan: 'Vlan',
    Ticket: 'Ticket',
    TicketProduct: 'Dịch vụ',
    TicketType: 'Loại',
    TicketList: 'Danh sách Ticket',
    TicketCreate: 'Tạo mới Ticket',
    TicketDetail: 'Thông tin Ticket',
    TicketAdmin: 'Quản lý',
    TicketStepCreate: 'Tạo step',
    TicketStepEdit: 'Sửa step',
    TicketStepList: 'Step',
    Appgw: 'App GW',
    ContentService: 'Content service'
  },
  login: {
    capsLockOn: 'Caps lock đang bật',
    submit: 'Đăng nhập',
    sso: 'Đăng nhập tài khoản O365',
    loginTitle: {
      ldap: 'GT Ldap (Dành cho GT)'
    },
    notice: 'Nếu có vấn đề về tài khoản, vui lỏng liên hệ RiLT hoặc mail gt.framework@vng.com.vn',
    placeholder: {
      username: 'Tên đăng nhập',
      password: 'Mật khẩu'
    },
    error: {
      username: 'Vui lòng nhập tên đăng nhập',
      password: 'Vui lòng nhập mật khẫu'
    }
  },
  dashboard: {
    admin: {
      warmup: {
        database: 'Warmup Database',
        service: 'Warmup Service',
        confirmWarmup: 'Bạn muốn warm up <b>%s</b>?'
      },
      staticstic: {
        title: 'Thống kê'
      }
    },
    feedback: {
      button: 'Phản hồi',
      thankful: 'Những góp ý của bạn sẽ giúp sản phẩm ngày càng hoàn thiện. Cảm ơn!',
      title: 'Phản hồi từ người dùng',
      titleNew: 'Góp ý của bạn',
      placeholderSearching: 'Nhập mã người dùng đễ tìm kiếm',
      subject: 'Tiêu đề',
      content: 'Nội dung'
    }
  },
  adminProductInfo: {
    id: 'Mã sp',
    productName: 'Tên sp',
    faCode: 'FA Code',
    pm: 'PM',
    po: 'PO',
    seo: 'SEO',
    deptHead: 'Dept Head',
    productKey: 'Product key',
    deptOwner: 'Dept Owner',
    prodType: 'Thể loại',
    prodMarket: 'Thị trường',
    prodStatus: 'Trạng thái',
    status: 'Trạng thái',
    operationContact: 'Thông tin vận hành',
    estRanking: 'Xếp hạng',
    prodOpenDate: 'Ngày mở',
    prodCloseDate: 'Ngày đóng',
    placeholderSearching: 'Nhập tên sản phẩm, mã sản phẩm hoặc FA Code để tìm kiếm',
    placeholder: {
      pm: 'Project Manager',
      po: 'Product Operation',
      seo: 'Software Engineer Owner',
      deptHead: 'Trưởng phòng ban',
      deptOwner: 'Phòng ban vận hành',
      prodType: 'Thể loại sản phẩm',
      prodInfo: 'Tìm theo productID | FaCode',
      prodMarket: 'Thị trường phát hành sản phẩm',
      prodOpenDate: 'Ngày phát hành sản phẩm',
      prodCloseDate: 'Ngày đóng sản phẩm'
    },
    alertDataExisted: 'Sản phẩm <b>%s</b> đã tồn tại',
    alertDataNotExisted: 'Sản phẩm <b>%s</b> không tồn tại',
    step: {
      productInfo: 'Thông tin tổng quan sản phẩm',
      productDetail: 'Thông tin chi tiết sản phẩm'
    }
  },
  adminServiceInfo: {
    prodMappingFaCode: 'FA Code',
    prodMappingMarket: 'Thị trường',
    prodMappingId: 'Mã sản phẩm liên kết',
    prodMappingName: 'Tên sản phẩm liên kết',
    extInfo: 'Thông tin mở rộng',
    id: 'Mã dịch vụ',
    name: 'Tên dịch vụ',
    allService: 'Toàn bộ dịch vụ',
    contactPoint: 'Liên hệ',
    serviceApis: 'APIS cung cấp',
    serviceApps: 'Sản phẩm cung cấp',
    description: 'Mô tả',
    serviceJar: 'Service Jar',
    serviceClass: 'Service Class',
    serviceConfig: 'Cấu hình',
    serviceInfo: 'Thông tin',
    serviceStatus: 'Trạng thái',
    serviceMaintenance: 'Bảo trì',
    placeholderSearching: 'Nhập tên dịch vụ hoặc mã dịch vụ để tìm kiếm',
    signSecretKey: 'Mã bí mật',
    authSignType: 'Loại mã hóa',
    alertDataExisted: 'Dịch vụ <b>%s</b> đã tồn tại',
    alertServiceAppExisted: 'Sản phẩm <b>%s</b> đã tồn tại',
    alertDataNotExisted: 'Dịch vụ <b>%s</b> không tồn tại!',
    apiLink: 'Bảo mật',
    verifyData: 'Xác thực',
    useCustomProxy: 'Proxy',
    requestTimeout: 'Time Out',
    editExtParams: 'Sửa thông tin thêm',
    productList: 'Sản phẩm',
    editMappingProductInfo: 'Thông tin liên kết sản phẩm ',
    useMappingProduct: 'Sử dụng sản phẩm và liên kết sản phẩm với dịch vụ ',
    mappingProductSelected: 'Sản phẩm sử dụng',
    mappingProductNotSelected: 'Sản phẩm không sử dụng',
    step: {
      serviceInfo: 'Thông tin tổng quan dịch vụ',
      serviceDetail: 'Thông tin chi tiết dịch vụ',
      serviceMapping: 'Liên kết sản phẩm'
    },
    placeholder: {
      serviceId: 'Mã dịch vụ',
      contactPoint: 'Người liên hệ'
    },
    serviceApiList: 'Danh sách APIs',
    serviceAppList: 'Danh sách sản phẩm',
    API: {
      serviceApiId: 'Mã API',
      name: 'Tên API',
      url: 'Url',
      method: 'Phương thức',
      secretKey: 'Mã bí mật',
      signType: 'Loại mã hóa',
      proxyHost: 'Host',
      proxyPort: 'Port',
      readTimeout: 'Đọc',
      connectTimeout: 'Kết nối',
      extParams: 'Thông tin thêm'
    }
  },
  adminAccessInfo: {
    selection: {
      app: 'Gán quyền sản phẩm',
      user: 'Gán quyền người dùng',
      service: 'Gán quyền dịch vụ',
      grantAll: 'GÁN QUYỀN TOÀN BỘ',
      serviceApi: 'Gán quyền API',
      accessType: 'Chọn loại truy cập'
    },
    hintDefaultGrantService: 'Phân quyền truy cập cho từng service và danh sách sản phẩm. Đối với loại DENY_ALL_ALLOW, vui lòng không bỏ trống danh sách sản phẩm',
    grantProductServiceError: 'Với loại DENY_ALL_ALLOW, vui lòng chọn sản phẩm truy cập',
    grantServiceError: 'Vui lòng chọn dịch vụ phân quyền',
    messageBoxTitle: 'Phân quyền truy cập dịch vụ, sản phẩm',
    editAppForAllService: 'Sửa quyền truy cập dịch vụ, sản phẩm',
    userId: 'Người dùng',
    serviceId: 'Dịch vụ',
    appAccess: 'Được cấp quyền',
    appNotAccess: 'Không cấp quyền',
    serviceApis: 'Thông tin API dịch vụ cung cấp',
    accessType: 'Loại truy cập',
    description: 'Mô tả',
    placeholderDescription: 'Thông tin về quyền sử dụng dịch vụ',
    placeholderSearching: 'Nhập mã người dùng hoặc mã dịch vụ để tìm kiếm',
    placeholderSearchApp: 'Nhập thông tin sản phẩm để tìm kiếm',
    alertDataExisted: 'Người dùng <b>%s</b> đã được gán quyền cho dịch vụ <b>%s</b>!',
    alertDataNotExisted: 'Người dùng  <b>%s</b> chưa được gán quyền cho dịch vụ <b>%s</b>!'
  },
  userInfo: {
    placeholderSearching: 'Nhập mã người dùng đễ tìm kiếm',
    name: 'Họ và tên',
    email: 'Email',
    phone: 'Số điện thoại',
    title: 'Chức vụ',
    permission: 'Quyền truy cập',
    department: 'Bộ phận',
    confirmUpdateInfo: 'Bạn muốn cập nhật thông tin của <b>%s</b>?'
  },
  ppsupport: {
    PpsupportGetProfile: 'PASSPORT SUPPORT',
    PpsupportAdminGetProfile: 'PASSPORT SUPPORT - USER PROFILE',
    placeholderSearching: 'Nhập thông tin tìm kiếm',
    placeholderSubmit: 'Ctrl + Enter để xác nhận.',
    instruction: 'Để tìm kiếm thông tin nhiều tài khoản cùng 1 lúc. Mỗi tài khoản vui lòng ngăn cách nhau bởi kí tự xuống dòng.',
    selection: {
      app: 'Chọn sản phẩm',
      service: 'Chọn dịch vụ'
    },
    appId: 'Sản phẩm',
    serviceId: 'Dịch vụ',
    value: 'Thông tin tìm kiếm'
  },
  billingtool: {
    title: 'THÔNG TIN ĐƠN HÀNG',
    selection: {
      app: 'Chọn sản phẩm',
      service: 'Chọn dịch vụ',
      clientKey: 'Chọn Client Key',
      paymentMonth: 'Chọn tháng',
      environment: 'Chọn môi trường',
      clientID: 'Client ID'
    },
    appId: 'Sản phẩm',
    serviceId: 'Dịch vụ',
    clientKey: 'Client Key',
    value: 'Thông tin tìm kiếm',
    paymentMonth: 'Trong tháng',
    placeholderSearching: 'Nhập ngày tạo đơn hàng để tìm kiếm',
    productInfo: 'Thông tin sản phẩm',
    environment: 'Môi trường',
    clientID: 'Client ID',
    fulfillment: {
      DBG_ADD: 'Cộng tiền vào ví của User',
      WALLET_SPENT: 'Trừ tiền để mua vật phẩm',
      GAME_ADD: 'Cộng tiền vào game cho User'
    }
  },
  webpayment: {
    app: {
      id: 'ID',
      name: 'Tên ứng dụng',
      createApp: 'Tạo ứng dụng',
      editApp: 'Chỉnh sửa ứng dụng',
      placeholder: {
        id: 'Nhập ID',
        name: 'Nhập tên ứng dụng',
        contactPoint: 'Liên hệ',
        faCode: 'FA Code',
        platform: 'Nền tảng',
        enable: 'Kích hoạt'
      }
    },
    platform: {
      id: 'ID',
      name: 'Tên nền tảng',
      enable: 'Kích hoạt',
      createPlatform: 'Tạo nền tảng',
      placeholderSearching: 'Nhập mã nền tảng hoặc tên nền tảng để tìm kiếm'
    },
    shopfront: {
      id: 'ID',
      name: 'Tên trang nạp',
      enable: 'Kích hoạt',
      createShopfront: 'Tạo trang nạp',
      editShopfront: 'Sửa trang nạp',
      placeholderSearching: 'Nhập mã trang nạp hoặc tên trang nạp để tìm kiếm',
      placeholder: {
        id: 'Nhập ID',
        name: 'Nhập tên trang nạp',
        description: 'Mô tả',
        shopfrontUrl: 'Đường dẫn trang nạp',
        appID: 'ID ứng dụng',
        version: 'Phiên bản'
      }
    }
  },
  webpaymentOps: {
    placeholderSearching: 'Nhập để tìm kiếm',
    enviroment: 'Môi trường',
    area: 'khu vực',
    app: {
      id: 'ID',
      name: 'Tên ứng dụng',
      title: 'Danh sách ứng dụng',
      detailTitle: 'Chi tiết ứng dụng',
      contactPoint: 'Liên hệ',
      faCode: 'FA Code',
      platform: 'Nền tảng',
      enable: 'Kích hoạt',
      createApp: 'Tạo ứng dụng',
      createBilling: 'Tạo Billing'
    },
    payment: {
      id: 'ID',
      name: 'Tên thanh toán',
      title: 'Danh sách thanh toán',
      enable: 'Enable',
      createPayment: 'Tạo hanh toán',
      providerID: 'ID Nhà cung cấp',
      providerName: 'Tên nhà cung cấp',
      gatewayName: 'Gateway Name',
      methodID: 'ID phương thức',
      methodName: 'Tên phương thức',
      gatewayID: 'Gateway ID'
    },
    shopfront: {
      id: 'ID',
      name: 'Name',
      title: 'Danh sách trang nạp',
      createShopfront: 'Tạo trang nạp',
      editShopfront: 'Sửa trang nạp',
      shopfrontID: 'ID trang nạp',
      shopfrontName: 'Tên trang nạp',
      clientID: 'ID Khách hàng',
      version: 'Phiên bản',
      enable: 'Kích hoạt'
    }
  },
  serverInfo: {
    serverList: {
      id: 'IP Private',
      name: 'Danh sách Server',
      serverNotUpdate: 'Server chưa cập nhật',
      listServerNotUpdate: 'Danh sách server chưa cập nhật',
      monitor: {
        clickToView: 'Xem chi tiết'
      },
      daySelection: {
        toDay: 'Hôm nay',
        prevDay: ' ngày trước',
        yesterday: 'Hôm qua'
      },
      placeholder: {
        location: 'Vị trí',
        product: 'Sản phẩm',
        vlan: 'Vlan',
        serverType: 'Loại máy chủ'
      },
      placeholderSearching: 'Nhập IP hoặc Tên Host để tìm kiếm',
      thead: {
        ipPrivate: 'IP Private',
        hostName: 'Tên Host',
        iFaces: 'IFaces',
        product: 'Sản Phẩm',
        vlan: 'VLan',
        serverType: 'Loại máy chủ'
      },
      deleteServer: 'Điều này sẽ xóa vĩnh viễn Máy chủ này. Tiếp tục?',
      warning: 'Cảnh báo',
      delSuccess: 'Xóa thành công',
      delCancel: 'Đã hủy xóa'
    },
    product: {
      id: 'ID Sản phẩm',
      name: 'Danh sách sản phẩm',
      productName: 'Tên sản phẩm',
      productStatus: 'Trạng thái sản phẩm',
      productStatusList: {
        new: 'Mới',
        inUsed: 'Đang sử dụng',
        close: 'Ngưng hoạt động'
      },
      enable: 'Kích hoạt',
      createProduct: 'Tạo sản phẩm',
      placeholderSearching: 'Nhập tên sản phẩm để tìm kiếm'
    },
    vlan: {
      id: 'ID',
      name: 'Name',
      enable: 'Enable',
      listVlan: 'Danh sách Vlan',
      createVlan: 'Tạo Vlan',
      editVlan: 'Edit Vlan',
      placeholderSearching: 'Input Vlan name or Vlan id để tìm kiếm',
      placeholder: {
        id: 'ID',
        name: 'Vlan name',
        description: 'Description'
      }
    },
    productSDK: {
      id: 'ID Sản Phẩm',
      name: 'Sản Phẩm',
      productSDKName: 'Tên Sản Phẩm',
      productSDKStatus: 'Trạng thái',
      listVlanSDK: 'Danh sách Vlan',
      enable: 'Enable',
      placeholderSearching: 'Nhập vào để tìm kiếm',
      productSDKStatusList: {
        new: 'Mới',
        inUsed: 'Đang sử dụng',
        close: 'Ngưng hoạt động'
      },
      warningStatus: 'Cảnh báo: Dữ liệu chưa được cập nhật từ ngày'
    }
  },
  ticket: {
    placeholderSearching: 'Nhập ID, tên đễ tìm kiếm',
    placeholderTicketSearching: 'Nhập thông tin đễ tìm kiếm',
    createTicketTitle: 'Tạo mới Ticket',
    product: {
      owner: 'Quản lý dịch vụ',
      member: 'Thành viên nhóm',
      id: 'ID',
      name: 'Tên dịch vụ',
      createProduct: 'Tạo dịch vụ',
      updateProduct: 'Cập nhật  dịch vụ',
      type: 'Loại dịch vụ',
      placeholder: {
        owner: 'Chọn người quản lý',
        member: 'Chọn thành viên',
        type: 'Chọn loại dịch vụ',
        id: 'Nhập ID',
        name: 'Nhập tên dịch vụ'
      },
      productExisted: 'Dịch vụ  %s đã tồn tại'
    },
    step: {
      placeholderSearching: 'Nhập thông tin tìm kiếm',
      alertDataExisted: 'Template cho dịch vụ <b>%s</b> và loại <b>%s</b> đã tồn tại!',
      alertDataNotExisted: 'Template của dịch vụ <b>%s</b> và loại <b>%s</b> không tồn tại!',
      productId: 'Dịch vụ',
      typeId: 'Loại dịch vụ',
      name: 'Tên gọi step',
      template: 'Template',
      orderStep: 'Step',
      extInfo: 'Thông tin thêm',
      placeholder: {
        name: 'Nhập tên gọi step',
        extInfo: 'Nhập thông tin thêm',
        productId: 'Chọn dịch vụ',
        typeId: 'Chọn loại dịch vụ',
        orderStep: 'Step'
      },
      stepExisted: 'Step %s-%s đã tồn tại'
    },
    type: {
      id: 'ID',
      name: 'Tên loại',
      createType: 'Tạo loại mới',
      placeholder: {
        id: 'Nhập ID',
        name: 'Nhập tên loại'
      },
      typeExisted: 'Loại %s đã tồn tại'
    },
    placeholder: {
      subject: 'Nhập tiêu đề ticket',
      productId: 'Chọn dịch vụ',
      typeId: 'Chọn loại yêu cầu',
      appId: 'Chọn sản phẩm',
      followers: 'Nhập domain để chọn người hỗ trợ',
      priority: 'Chọn độ ưu tiên',
      comment: 'Ctrl + Enter để gửi.',
      deadline: 'Chọn thời gian dự kiến'
    },
    info: {
      createdBy: 'Ticket được tạo bởi',
      closed: 'Ticket được hoàn thành bởi',
      watingTicket: 'Ticket đang đợi ticket khác hoàn thành ',
      assigned: 'Ticket được thực hiện bởi',
      createdDate: 'Ngày tạo',
      title: 'Thông tin ticket',
      contentTicket: 'Nội dung ticket',
      titleProduct: 'Thông tin sản phẩm',
      titleConversation: 'Thông tin trao đổi',
      ticketNumber: 'Mã ticket',
      productId: 'Dịch vụ',
      typeId: 'Loại yêu cầu',
      appId: 'Sản phẩm',
      subject: 'Tiêu đề',
      followers: 'Người hỗ trợ',
      approver: 'Người xét duyệt',
      finisher: 'Người đóng ticket',
      content: 'Nội dung',
      attachment: 'File đính kèm',
      priority: 'Độ ưu tiên',
      deadline: 'Thời gian dự kiến',
      requester: 'Người tạo',
      assignee: 'Người thực hiện',
      myTicket: 'Ticket tôi tạo',
      followerTicket: 'Ticket tôi theo dõi',
      allTicket: 'Tất cả'
    },
    button: {
      assigner: 'Tiếp nhận yêu cầu'
    }
  },
  appgw: {
    name: 'Cổng Ứng Dụng',
    appID: 'Sản phẩm',
    serverID: 'ID Máy chủ',
    loginType: 'Phương thức đăng nhập',
    userID: 'ID Người dùng'
  },
  formValidate: {
    required: ' không được bỏ trống'
  },
  status: {
    success: 'Thành công',
    total: 'Tổng cộng',
    status: 'Trạng thái',
    active: 'Hoạt động',
    deactive: 'Không hoạt động',
    enable: 'Kích hoạt',
    disable: 'Vô hiệu hóa',
    dataNotFound: 'Chưa có thông tin',
    formInvalid: 'Vui lòng điền đầy đủ thông tin',
    tipUploadFile: 'Dung lượng file nhỏ hơn 1Mb',
    loading: 'Đang tải dữ liệu'
  },
  permission: {
    adminService: 'Quản trị dịch vụ',
    admin: 'Quản trị hệ thống',
    pqa: 'PQA',
    supervisor: 'Người vận hành',
    member: 'Người dùng'
  },
  button: {
    backTop: 'Lên đầu trang',
    search: 'Tìm kiếm',
    add: 'Thêm',
    create: 'Tạo',
    edit: 'Sửa',
    delete: 'Xóa',
    ok: 'OK',
    cancel: 'Hủy',
    submit: 'Xác nhận',
    warmup: 'Warm Up',
    warmupAll: 'Warm Up All',
    view: 'Xem',
    nextStep: 'Bước tiếp theo',
    previousStep: 'Lùi về bước trước',
    backToHome: 'Quay lại trang chủ',
    exportExcel: 'Xuất file EXCEL',
    clickToSelect: 'Bấm để chọn file',
    dropFile: 'Kéo, thả file vào đây hoặc',
    detail: 'Chi tiết',
    turnOnMaintain: 'Bật bảo trì',
    turnOffMaintain: 'Tắt bảo trì'
  },
  navbar: {
    logOut: 'Đăng xuất',
    dashboard: 'Dashboard',
    screenfull: 'Toàn màn hình',
    theme: 'Đổi màu',
    size: 'Kích cỡ chữ',
    changeLanguage: 'Đổi ngôn ngữ',
    changeLangSuccess: 'Đổi ngôn ngữ thành công!'
  },
  tagsView: {
    refresh: 'Tải lại',
    close: 'Đóng',
    closeOthers: 'Đóng những cái khác',
    closeAll: 'Đóng tất cả'
  },
  errorPage: {
    401: {
      title: 'Không có quyền truy cập.',
      contactInfo: 'Liên hệ tudhm@vng.com.vn để được hỗ trợ.'
    },
    404: {
      title: 'Đã có lỗi xảy ra.',
      detail: 'Yêu cầu kết nối đến server của bạn không thực hiện được'
    }
  },
  serviceMaintenance: 'Dịch vụ đang được nâng cấp bảo trì'
}
