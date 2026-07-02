const connectButton = document.getElementById("connectButton");
const connectText = document.getElementById("connectText");
const lastSync = document.getElementById("lastSync");
const toast = document.getElementById("toast");
const hero = document.querySelector(".hero");
const rotateDevice = document.getElementById("rotateDevice");
const homeBindEmpty = document.getElementById("homeBindEmpty");
const homeScanBindButton = document.getElementById("homeScanBindButton");
const homeDeviceRow = document.getElementById("homeDeviceRow");
const homeActionGrid = document.getElementById("homeActionGrid");
const deviceMenuButton = document.getElementById("deviceMenuButton");
const deviceMenu = document.getElementById("deviceMenu");
const phone = document.querySelector(".phone");
const bookstoreView = document.getElementById("bookstoreView");
const bookSearch = document.getElementById("bookSearch");
const storeEmpty = document.getElementById("storeEmpty");
const galleryView = document.getElementById("galleryView");
const appsView = document.getElementById("appsView");
const coverBackButton = document.getElementById("coverBackButton");
const coverZoom = document.getElementById("coverZoom");
const coverZoomValue = document.getElementById("coverZoomValue");
const coverOverlay = document.querySelector(".cover-overlay");
const sheetScrim = document.getElementById("sheetScrim");
const deviceSheet = document.getElementById("deviceSheet");
const sheetDeviceName = document.getElementById("sheetDeviceName");
const addDeviceButton = document.getElementById("addDeviceButton");
const importTransferSheet = document.getElementById("importTransferSheet");
const importTransferCloseButton = document.getElementById("importTransferCloseButton");
const importConnectDeviceButton = document.getElementById("importConnectDeviceButton");
const importCloudTransferButton = document.getElementById("importCloudTransferButton");
const connectionSheet = document.getElementById("connectionSheet");
const connectionCloseButton = document.getElementById("connectionCloseButton");
const connectionDeviceTitle = document.getElementById("connectionDeviceTitle");
const connectionSuccessDevice = document.getElementById("connectionSuccessDevice");
const connectionStepItems = document.querySelectorAll("[data-connection-step]");
const reconnectButton = document.getElementById("reconnectButton");
const connectionDoneButton = document.getElementById("connectionDoneButton");
const bindSheet = document.getElementById("bindSheet");
const boundDeviceList = document.getElementById("boundDeviceList");
const deviceEmptyState = document.getElementById("deviceEmptyState");
const scanBackButton = document.getElementById("scanBackButton");
const scanGalleryButton = document.getElementById("scanGalleryButton");
const simulateScanButton = document.getElementById("simulateScanButton");
const fileManagerBack = document.getElementById("fileManagerBack");
const serverView = document.getElementById("serverView");
const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const sceneConditionGroup = document.getElementById("sceneConditionGroup");
const scenePhoneWifiButton = document.getElementById("scenePhoneWifiButton");
const sceneSwitchWifiButton = document.getElementById("sceneSwitchWifiButton");
const sceneWifiButton = document.getElementById("sceneWifiButton");
const sceneSameWifiButton = document.getElementById("sceneSameWifiButton");
const sceneTransferButton = document.getElementById("sceneTransferButton");
const sceneStartButton = document.getElementById("sceneStartButton");
const sceneStopButton = document.getElementById("sceneStopButton");
const todoBackButton = document.getElementById("todoBackButton");
const todoAddButton = document.getElementById("todoAddButton");
const todoList = document.getElementById("todoList");
const todoScrim = document.getElementById("todoScrim");
const todoModal = document.getElementById("todoModal");
const todoModalTitle = document.getElementById("todoModalTitle");
const todoForm = document.getElementById("todoForm");
const todoTitleInput = document.getElementById("todoTitleInput");
const todoTimeInput = document.getElementById("todoTimeInput");
const todoCancelButton = document.getElementById("todoCancelButton");
const todoWallpaperButton = document.getElementById("todoWallpaperButton");
const todoPushButton = document.getElementById("todoPushButton");
const countdownBackButton = document.getElementById("countdownBackButton");
const countdownAddButton = document.getElementById("countdownAddButton");
const countdownList = document.getElementById("countdownList");
const countdownScrim = document.getElementById("countdownScrim");
const countdownModal = document.getElementById("countdownModal");
const countdownModalTitle = document.getElementById("countdownModalTitle");
const countdownForm = document.getElementById("countdownForm");
const countdownTitleInput = document.getElementById("countdownTitleInput");
const countdownDateInput = document.getElementById("countdownDateInput");
const countdownCancelButton = document.getElementById("countdownCancelButton");
const countdownWallpaperButton = document.getElementById("countdownWallpaperButton");
const countdownPushButton = document.getElementById("countdownPushButton");
const wordsView = document.getElementById("wordsView");
const wordsBackButton = document.getElementById("wordsBackButton");
const wordsViewTitle = document.getElementById("wordsViewTitle");
const wordBooksScreen = document.getElementById("wordBooksScreen");
const wordListScreen = document.getElementById("wordListScreen");
const wordDetailScreen = document.getElementById("wordDetailScreen");
const wordList = document.getElementById("wordList");
const wordsDetailFooter = document.getElementById("wordsDetailFooter");
const wordDetailBook = document.getElementById("wordDetailBook");
const wordDetailTerm = document.getElementById("wordDetailTerm");
const wordDetailPhonetic = document.getElementById("wordDetailPhonetic");
const wordDetailMeaning = document.getElementById("wordDetailMeaning");
const wordDetailExample = document.getElementById("wordDetailExample");
const wordDetailNote = document.getElementById("wordDetailNote");
const wordWallpaperButton = document.getElementById("wordWallpaperButton");
const wordPushButton = document.getElementById("wordPushButton");
const wordsFrequencyScrim = document.getElementById("wordsFrequencyScrim");
const wordsFrequencyModal = document.getElementById("wordsFrequencyModal");
const wordsFrequencyCancel = document.getElementById("wordsFrequencyCancel");

let toastTimer = null;
let connectionTimer = null;
let editingTodoCard = null;
let editingCountdownCard = null;
const sceneState = {
  phoneWifiConnected: false,
  einkWifiConnected: false,
  appSameWifi: false,
  fileTransferOpen: false,
  isExpanded: false,
};
const fallbackUser = {
  name: "Darwin",
  email: "darwin@example.com",
};
const utilityModes = ["pet-mode", "words-mode", "stocks-mode", "template-mode"];
let activeProfileDevice = "";
let activeWordBook = null;
let wordsScreen = "books";
let pendingAuthUser = null;
const wordBooks = {
  cet4: {
    title: "四级核心词",
    words: [
      {
        term: "approach",
        phonetic: "/əˈproʊtʃ/",
        meaning: "方法；接近；处理",
        example: "A clear approach helps you remember words faster.",
        note: "ap + proach，靠近问题时采用的方法。",
      },
      {
        term: "benefit",
        phonetic: "/ˈbenɪfɪt/",
        meaning: "益处；使受益",
        example: "Regular review brings long-term benefit.",
        note: "bene 表示好，fit 联想合适，有好处。",
      },
      {
        term: "context",
        phonetic: "/ˈkɑːntekst/",
        meaning: "上下文；背景",
        example: "The meaning changes in a different context.",
        note: "con 表示共同，text 表示文本，放在一起就是上下文。",
      },
      {
        term: "efficient",
        phonetic: "/ɪˈfɪʃnt/",
        meaning: "高效的；有效率的",
        example: "E-paper is efficient for low-power displays.",
        note: "effect 的近亲，强调效率。",
      },
    ],
  },
  reading: {
    title: "阅读常见词",
    words: [
      {
        term: "evidence",
        phonetic: "/ˈevɪdəns/",
        meaning: "证据；迹象",
        example: "The paragraph gives evidence for the main idea.",
        note: "阅读题里常用于支撑观点。",
      },
      {
        term: "contrast",
        phonetic: "/ˈkɑːntræst/",
        meaning: "对比；差异",
        example: "The author uses contrast to show the change.",
        note: "con + trast，放在一起看差别。",
      },
      {
        term: "interpret",
        phonetic: "/ɪnˈtɜːrprət/",
        meaning: "解释；理解",
        example: "Readers may interpret the sentence differently.",
        note: "阅读理解里的核心动作。",
      },
    ],
  },
  design: {
    title: "设计与产品词",
    words: [
      {
        term: "layout",
        phonetic: "/ˈleɪaʊt/",
        meaning: "布局；版式；安排",
        example: "The layout should be easy to scan on an e-paper screen.",
        note: "lay out 表示铺开、安排，合起来就是布局。",
      },
      {
        term: "margin",
        phonetic: "/ˈmɑːrdʒɪn/",
        meaning: "边距；余量",
        example: "A wider margin makes reading more comfortable.",
        note: "页面四周留白，也可表示余地。",
      },
      {
        term: "template",
        phonetic: "/ˈtempleɪt/",
        meaning: "模板；样板",
        example: "Choose a template before pushing content to the device.",
        note: "临摹或复用的基础结构。",
      },
      {
        term: "preview",
        phonetic: "/ˈpriːvjuː/",
        meaning: "预览；提前查看",
        example: "Preview the wallpaper before sending it.",
        note: "pre 表示提前，view 表示看。",
      },
    ],
  },
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[char]);
}

function setProfileUser(user) {
  profileName.textContent = user.name || fallbackUser.name;
  profileEmail.textContent = user.email || fallbackUser.email;
}

function requestServerSelection(user) {
  pendingAuthUser = user || fallbackUser;
  phone.classList.remove("auth-mode");
  phone.classList.add("server-mode");
}

function unlockApp(region) {
  const nextUser = pendingAuthUser || fallbackUser;
  localStorage.setItem("zi-app-user", JSON.stringify(nextUser));
  localStorage.setItem("zi-app-server", region);
  setProfileUser(nextUser);
  phone.classList.remove("auth-mode", "server-mode");
  pendingAuthUser = null;
  syncDeviceState();
  showToast(`已选择${region}服务器`);
}

function lockApp() {
  localStorage.removeItem("zi-app-user");
  localStorage.removeItem("zi-app-server");
  pendingAuthUser = null;
  phone.className = "phone auth-mode";
  closeDeviceSheet();
  deviceMenuButton.setAttribute("aria-expanded", "false");
  deviceMenu.hidden = true;
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "首页");
  });
  showToast("已退出登录");
}

setProfileUser(fallbackUser);

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  requestServerSelection({
    name: fallbackUser.name,
    email: loginEmail.value.trim() || fallbackUser.email,
  });
});

serverView.querySelectorAll("[data-server-region]").forEach((button) => {
  button.addEventListener("click", () => {
    unlockApp(button.dataset.serverRegion);
  });
});

connectButton.addEventListener("click", () => {
  if (!getBoundDeviceRows().length) {
    openBindSheet();
    showToast("请先绑定设备");
    return;
  }
  if (connectButton.classList.contains("is-connected")) {
    showToast("设备已连接");
    return;
  }
  openConnectionSheet();
});

rotateDevice.addEventListener("click", () => {
  rotateDevice.classList.toggle("is-flat");
  showToast("已切换设备展示角度");
});

deviceMenuButton.addEventListener("click", () => {
  if (!getBoundDeviceRows().length) {
    openBindSheet();
    return;
  }
  const expanded = deviceMenuButton.getAttribute("aria-expanded") === "true";
  deviceMenuButton.setAttribute("aria-expanded", String(!expanded));
  deviceMenu.hidden = expanded;
});

deviceMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-device]");
  if (!button) return;
  setActiveProfileDevice(button.dataset.device);
  deviceMenuButton.querySelector("span").textContent = button.dataset.device;
  deviceMenuButton.setAttribute("aria-expanded", "false");
  deviceMenu.hidden = true;
  showToast(`已选择 ${button.dataset.device}`);
});

document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".action-card").forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");
    const action = card.dataset.action;
    if (!connectButton.classList.contains("is-connected")) {
      if (action === "导入图书") {
        openImportTransferSheet();
        return;
      }
      openConnectionSheet();
      return;
    }
    showToast(action);
  });
});

document.querySelectorAll(".tab-item").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-item").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const label = tab.dataset.tab;
    phone.classList.toggle("bookstore-mode", label === "书城");
    phone.classList.toggle("gallery-mode", label === "图库");
    phone.classList.toggle("apps-mode", label === "应用");
    phone.classList.toggle("profile-mode", label === "个人中心");
    phone.classList.remove("cover-editor-mode", "file-manager-mode", "todo-mode", "countdown-mode", ...utilityModes);
    if (label === "首页") {
      syncDeviceState();
    }
    showToast(`切换到${label}`);
  });
});

document.querySelectorAll(".category-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".category-chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    showToast(`${chip.textContent}分类`);
  });
});

document.querySelectorAll("[data-book]").forEach((book) => {
  book.addEventListener("click", () => {
    showToast(`打开《${book.dataset.book}》`);
  });
});

bookSearch.addEventListener("input", () => {
  const keyword = bookSearch.value.trim().toLowerCase();
  const rows = [...document.querySelectorAll(".recommend-row")];
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.innerText.toLowerCase();
    const visible = !keyword || text.includes(keyword);
    row.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelector(".recommend-list").classList.toggle("is-filtered", Boolean(keyword));
  storeEmpty.hidden = visibleCount > 0;
});

document.querySelectorAll(".asset-tile").forEach((asset) => {
  asset.addEventListener("click", () => {
    showToast(`选择资源：${asset.dataset.asset}`);
  });
});

document.querySelectorAll("[data-template]").forEach((template) => {
  template.addEventListener("click", () => {
    if (template.dataset.template === "透明书封") {
      phone.classList.add("cover-editor-mode");
      phone.classList.remove("gallery-mode", "bookstore-mode", "apps-mode", "todo-mode", "countdown-mode", ...utilityModes);
      showToast("打开透明书封");
      return;
    }
    showToast(`打开${template.dataset.template}`);
  });
});

coverBackButton.addEventListener("click", () => {
  phone.classList.remove("cover-editor-mode");
  phone.classList.add("template-mode");
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "应用");
  });
});

coverZoom.addEventListener("input", () => {
  const value = Number(coverZoom.value);
  coverZoomValue.textContent = `${value}%`;
  coverOverlay.style.transform = `rotate(-2deg) scale(${value / 100})`;
});

function openDeviceSheet(deviceName) {
  bindSheet.hidden = true;
  connectionSheet.hidden = true;
  importTransferSheet.hidden = true;
  phone.classList.remove("scan-bind-mode");
  sheetDeviceName.textContent = deviceName;
  sheetScrim.hidden = false;
  deviceSheet.hidden = false;
}

function openBindSheet() {
  deviceSheet.hidden = true;
  connectionSheet.hidden = true;
  importTransferSheet.hidden = true;
  sheetScrim.hidden = true;
  bindSheet.hidden = false;
  phone.classList.add("scan-bind-mode");
}

function setDeviceConnection(connected) {
  connectButton.classList.toggle("is-connected", connected);
  connectButton.setAttribute("aria-pressed", String(connected));
  connectText.textContent = connected ? "已连接" : "未连接";
  lastSync.textContent = connected ? "上次连接：2 小时前" : "上次连接：2 天前";
}

function ensureSimulatedDevice(name = "Darwin's Onyx epaper") {
  const exists = boundDeviceList.querySelector(`[data-profile-device="${CSS.escape(name)}"]`);
  if (exists) {
    syncDeviceState(name);
    return name;
  }

  const row = document.createElement("button");
  row.className = "device-list-row";
  row.type = "button";
  row.dataset.profileDevice = name;
  row.innerHTML = `
    <span>${escapeHTML(name)}</span>
    <span class="device-spacer"></span>
    <span class="device-more" aria-hidden="true">•••</span>
  `;
  boundDeviceList.append(row);
  syncDeviceState(name);
  return name;
}

function openConnectionSheet() {
  if (!activeProfileDevice) return;
  clearTimeout(connectionTimer);
  bindSheet.hidden = true;
  deviceSheet.hidden = true;
  importTransferSheet.hidden = true;
  connectionDeviceTitle.textContent = activeProfileDevice;
  connectionSuccessDevice.textContent = activeProfileDevice;
  connectionSheet.classList.remove("is-connecting", "is-success");
  updateConnectionCheckPanel();
  connectionSheet.hidden = false;
  sheetScrim.hidden = false;
  phone.classList.remove("scan-bind-mode");
}

function closeConnectionSheet() {
  clearTimeout(connectionTimer);
  connectionSheet.hidden = true;
  connectionSheet.classList.remove("is-connecting", "is-success");
  sheetScrim.hidden = true;
}

function openImportTransferSheet() {
  if (!getBoundDeviceRows().length) {
    openBindSheet();
    showToast("请先绑定设备");
    return;
  }
  clearTimeout(connectionTimer);
  bindSheet.hidden = true;
  deviceSheet.hidden = true;
  connectionSheet.hidden = true;
  connectionSheet.classList.remove("is-connecting", "is-success");
  importTransferSheet.hidden = false;
  sheetScrim.hidden = false;
  phone.classList.remove("scan-bind-mode");
}

function closeImportTransferSheet() {
  importTransferSheet.hidden = true;
  sheetScrim.hidden = true;
}

function startDeviceConnection() {
  if (!activeProfileDevice) return;
  const missing = getMissingSceneConditions();
  if (missing.length) {
    updateConnectionCheckPanel();
    updateSceneConditionButtons(missing);
    showToast(`请先完成：${getSceneConditionLabels(missing).join("、")}`);
    return;
  }
  connectionDeviceTitle.textContent = activeProfileDevice;
  connectionSuccessDevice.textContent = activeProfileDevice;
  connectionSheet.classList.remove("is-success");
  connectionSheet.classList.add("is-connecting");
  connectionTimer = setTimeout(() => {
    setDeviceConnection(true);
    connectionSheet.classList.remove("is-connecting");
    connectionSheet.classList.add("is-success");
    showToast("设备已连接");
  }, 1200);
}

function isHomeViewActive() {
  const blockedModes = [
    "auth-mode",
    "server-mode",
    "bookstore-mode",
    "gallery-mode",
    "apps-mode",
    "profile-mode",
    "cover-editor-mode",
    "file-manager-mode",
    "todo-mode",
    "countdown-mode",
    "scan-bind-mode",
    ...utilityModes,
  ];
  return !blockedModes.some((mode) => phone.classList.contains(mode));
}

function updateSceneConditionButtons(missing = []) {
  sceneConditionGroup.hidden = !sceneState.isExpanded;
  scenePhoneWifiButton.setAttribute("aria-pressed", String(sceneState.phoneWifiConnected));
  sceneWifiButton.setAttribute("aria-pressed", String(sceneState.einkWifiConnected));
  sceneSameWifiButton.setAttribute("aria-pressed", String(sceneState.appSameWifi));
  sceneTransferButton.setAttribute("aria-pressed", String(sceneState.fileTransferOpen));
  scenePhoneWifiButton.classList.toggle("is-needed", missing.includes("phoneWifi"));
  sceneWifiButton.classList.toggle("is-needed", missing.includes("einkWifi"));
  sceneSameWifiButton.classList.toggle("is-needed", missing.includes("sameWifi"));
  sceneTransferButton.classList.toggle("is-needed", missing.includes("transfer"));
  sceneSameWifiButton.classList.toggle("is-disabled", !sceneState.einkWifiConnected);
}

function setSceneCondition(key, value) {
  const shouldDisconnect = key !== "phoneWifiConnected" && value === false && (
    connectButton.classList.contains("is-connected") || connectionSheet.classList.contains("is-connecting")
  );
  sceneState[key] = value;
  if ((key === "phoneWifiConnected" || key === "einkWifiConnected") && !value) {
    sceneState.appSameWifi = false;
  }
  updateSceneConditionButtons();
  updateConnectionCheckPanel();
  if (shouldDisconnect) {
    clearTimeout(connectionTimer);
    closeConnectionSheet();
    setDeviceConnection(false);
    showToast("设备已断开");
    return true;
  }
  maybeStartSceneDevice();
  return false;
}

function disconnectDevice(message = "设备已断开") {
  clearTimeout(connectionTimer);
  closeConnectionSheet();
  setDeviceConnection(false);
  showToast(message);
}

function switchPhoneWifi() {
  const shouldDisconnect = connectButton.classList.contains("is-connected") || connectionSheet.classList.contains("is-connecting");
  sceneState.phoneWifiConnected = true;
  sceneState.appSameWifi = false;
  updateSceneConditionButtons(shouldDisconnect ? ["sameWifi"] : []);
  updateConnectionCheckPanel();
  if (shouldDisconnect) {
    disconnectDevice("WiFi 已变化，请重新连接");
    return;
  }
  showToast("手机已切换 WiFi");
}

function getMissingSceneConditions() {
  const missing = [];
  if (!sceneState.phoneWifiConnected) missing.push("phoneWifi");
  if (!sceneState.einkWifiConnected) missing.push("einkWifi");
  if (!sceneState.appSameWifi) missing.push("sameWifi");
  if (!sceneState.fileTransferOpen) missing.push("transfer");
  return missing;
}

function getSceneConditionLabels(items) {
  return items.map((item) => {
    if (item === "phoneWifi") return "手机连接 WiFi";
    if (item === "einkWifi") return "墨水屏连接 WiFi";
    if (item === "sameWifi") return "连接同一 WiFi";
    return "文件传输界面";
  });
}

function updateConnectionCheckPanel() {
  const stepState = {
    phoneWifi: sceneState.phoneWifiConnected,
    einkWifi: sceneState.einkWifiConnected,
    sameWifi: sceneState.appSameWifi,
    transfer: sceneState.fileTransferOpen,
  };

  connectionStepItems.forEach((item) => {
    const complete = Boolean(stepState[item.dataset.connectionStep]);
    const marker = item.querySelector("[data-step-index]");
    item.classList.toggle("done", complete);
    item.setAttribute("aria-checked", String(complete));
    if (!marker) return;
    if (complete) {
      marker.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12 4 4 8-8" /></svg>';
      return;
    }
    marker.textContent = marker.dataset.stepIndex;
  });
}

function startSceneDevice() {
  sceneState.isExpanded = true;
  if (!isHomeViewActive()) {
    updateSceneConditionButtons();
    showToast("请先回到首页");
    return;
  }
  const missing = getMissingSceneConditions();
  if (missing.length) {
    updateSceneConditionButtons(missing);
    showToast(`请先完成：${getSceneConditionLabels(missing).join("、")}`);
    return;
  }
  connectSceneDevice();
}

function maybeStartSceneDevice() {
  if (!sceneState.isExpanded || !isHomeViewActive() || getMissingSceneConditions().length) return;
  connectSceneDevice();
}

function connectSceneDevice() {
  if (connectButton.classList.contains("is-connected") || connectionSheet.classList.contains("is-connecting")) return;
  const deviceName = ensureSimulatedDevice("Darwin's Onyx epaper");
  activateHomeView(deviceName);
  openConnectionSheet();
  startDeviceConnection();
}

function stopSceneDevice() {
  sceneState.einkWifiConnected = false;
  sceneState.appSameWifi = false;
  sceneState.fileTransferOpen = false;
  sceneState.isExpanded = false;
  updateSceneConditionButtons();
  updateConnectionCheckPanel();
  if (connectButton.classList.contains("is-connected")) {
    closeConnectionSheet();
    setDeviceConnection(false);
    showToast("墨水屏已关闭");
    return;
  }
  showToast("设备未连接");
}

function closeDeviceSheet() {
  clearTimeout(connectionTimer);
  sheetScrim.hidden = true;
  deviceSheet.hidden = true;
  connectionSheet.hidden = true;
  connectionSheet.classList.remove("is-connecting", "is-success");
  importTransferSheet.hidden = true;
  bindSheet.hidden = true;
  phone.classList.remove("scan-bind-mode");
  syncDeviceState();
}

function activateHomeView(preferredDevice = activeProfileDevice) {
  phone.classList.remove("bookstore-mode", "gallery-mode", "apps-mode", "profile-mode", "cover-editor-mode", "file-manager-mode", "todo-mode", "countdown-mode", "scan-bind-mode", ...utilityModes);
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "首页");
  });
  syncDeviceState(preferredDevice);
}

function getBoundDeviceRows() {
  return [...boundDeviceList.querySelectorAll("[data-profile-device]")];
}

function setActiveProfileDevice(deviceName) {
  activeProfileDevice = deviceName;
  getBoundDeviceRows().forEach((row) => {
    const active = row.dataset.profileDevice === deviceName;
    row.classList.toggle("active-device", active);
    const check = row.querySelector(".device-check");
    const spacer = row.querySelector(".device-spacer");
    if (active && !check) {
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "device-check");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = '<path d="m5 12 4 4 10-10" />';
      spacer?.replaceWith(icon);
    }
    if (!active && check) {
      const nextSpacer = document.createElement("span");
      nextSpacer.className = "device-spacer";
      check.replaceWith(nextSpacer);
    }
  });
}

function syncDeviceState(preferredDevice = activeProfileDevice) {
  const rows = getBoundDeviceRows();
  const hasDevices = rows.length > 0;
  deviceEmptyState.hidden = hasDevices;
  deviceMenu.innerHTML = "";

  if (!hasDevices) {
    activeProfileDevice = "";
    phone.classList.add("no-bound-devices");
    hero.hidden = true;
    homeBindEmpty.hidden = false;
    homeDeviceRow.hidden = true;
    homeActionGrid.hidden = true;
    lastSync.hidden = true;
    deviceMenuButton.querySelector("span").textContent = "绑定设备";
    deviceMenuButton.setAttribute("aria-expanded", "false");
    deviceMenu.hidden = true;
    connectButton.classList.remove("is-connected");
    connectButton.setAttribute("aria-pressed", "false");
    connectText.textContent = "绑定设备";
    lastSync.textContent = "暂无绑定设备";
    return;
  }

  phone.classList.remove("no-bound-devices");
  hero.hidden = false;
  homeBindEmpty.hidden = true;
  homeDeviceRow.hidden = false;
  homeActionGrid.hidden = false;
  lastSync.hidden = false;
  const deviceNames = rows.map((row) => row.dataset.profileDevice);
  const nextDevice = deviceNames.includes(preferredDevice) ? preferredDevice : deviceNames[0];
  setActiveProfileDevice(nextDevice);
  deviceMenuButton.querySelector("span").textContent = nextDevice;
  connectText.textContent = connectButton.classList.contains("is-connected") ? "已连接" : "未连接";
  lastSync.textContent = connectButton.classList.contains("is-connected") ? "上次连接：2 小时前" : "上次连接：2 天前";

  rows.forEach((row) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.device = row.dataset.profileDevice;
    button.textContent = row.dataset.profileDevice;
    deviceMenu.append(button);
  });
}

function openCountdownView() {
  phone.classList.add("countdown-mode");
  phone.classList.remove("apps-mode", "profile-mode", "bookstore-mode", "gallery-mode", "cover-editor-mode", "file-manager-mode", "todo-mode", ...utilityModes);
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "应用");
  });
}

function closeCountdownView() {
  phone.classList.remove("countdown-mode");
  phone.classList.add("apps-mode");
  closeCountdownModal();
}

function openTodoView() {
  phone.classList.add("todo-mode");
  phone.classList.remove("apps-mode", "profile-mode", "bookstore-mode", "gallery-mode", "cover-editor-mode", "file-manager-mode", "countdown-mode", ...utilityModes);
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "应用");
  });
}

function closeTodoView() {
  phone.classList.remove("todo-mode");
  phone.classList.add("apps-mode");
  closeTodoModal();
}

function openUtilityView(mode) {
  phone.classList.add(mode);
  phone.classList.remove("apps-mode", "profile-mode", "bookstore-mode", "gallery-mode", "cover-editor-mode", "file-manager-mode", "todo-mode", "countdown-mode", ...utilityModes.filter((item) => item !== mode));
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "应用");
  });
}

function closeUtilityView() {
  phone.classList.remove(...utilityModes);
  phone.classList.add("apps-mode");
  closeWordFrequencyModal();
}

function setWordsScreen(screen) {
  wordsScreen = screen;
  wordBooksScreen.hidden = screen !== "books";
  wordListScreen.hidden = screen !== "list";
  wordDetailScreen.hidden = screen !== "detail";
  wordBooksScreen.classList.toggle("active", screen === "books");
  wordListScreen.classList.toggle("active", screen === "list");
  wordDetailScreen.classList.toggle("active", screen === "detail");
  wordsDetailFooter.hidden = screen !== "detail";
  wordsView.classList.toggle("words-detail-open", screen === "detail");

  if (screen === "books") {
    wordsViewTitle.textContent = "背单词";
  } else if (screen === "list") {
    wordsViewTitle.textContent = wordBooks[activeWordBook].title;
  } else {
    wordsViewTitle.textContent = "单词详情";
  }
}

function resetWordsView() {
  activeWordBook = null;
  setWordsScreen("books");
  closeWordFrequencyModal();
}

function renderWordList(bookKey) {
  activeWordBook = bookKey;
  const book = wordBooks[bookKey];
  wordList.innerHTML = book.words.map((word, index) => `
    <button type="button" data-word-index="${index}">
      <span>
        <strong>${escapeHTML(word.term)}</strong>
      </span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  `).join("");
  setWordsScreen("list");
}

function openWordDetail(index) {
  const book = wordBooks[activeWordBook];
  const word = book.words[index];
  if (!word) return;
  wordDetailBook.textContent = book.title;
  wordDetailTerm.textContent = word.term;
  wordDetailPhonetic.textContent = word.phonetic;
  wordDetailMeaning.textContent = word.meaning;
  wordDetailExample.textContent = word.example;
  wordDetailNote.textContent = word.note;
  setWordsScreen("detail");
}

function openWordFrequencyModal() {
  wordsFrequencyScrim.hidden = false;
  wordsFrequencyModal.hidden = false;
}

function closeWordFrequencyModal() {
  if (!wordsFrequencyScrim || !wordsFrequencyModal) return;
  wordsFrequencyScrim.hidden = true;
  wordsFrequencyModal.hidden = true;
}

function handleWordsBack() {
  if (wordsScreen === "detail") {
    setWordsScreen("list");
    closeWordFrequencyModal();
    return;
  }
  if (wordsScreen === "list") {
    resetWordsView();
    return;
  }
  closeUtilityView();
}

function buildTodoCard(title, timeValue, done = false) {
  const safeTitle = escapeHTML(title);
  const safeTime = escapeHTML(timeValue);
  const card = document.createElement("article");
  card.className = `todo-card${done ? " is-done" : ""}`;
  card.dataset.todoTitle = title;
  card.dataset.todoTime = timeValue;
  card.dataset.todoDone = String(done);
  card.innerHTML = `
    <button class="todo-check" type="button" data-todo-toggle aria-label="${done ? "取消完成" : "标记"}${safeTitle}${done ? "" : "为完成"}">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m7 12 3 3 7-7" />
      </svg>
    </button>
    <span class="todo-main">
      <strong>${safeTitle}</strong>
      <small>${safeTime}</small>
    </span>
    <span class="todo-card-actions">
      <button type="button" data-todo-edit aria-label="编辑${safeTitle}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
        </svg>
      </button>
      <button type="button" data-todo-delete aria-label="删除${safeTitle}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M6 7l1 14h10l1-14" />
          <path d="M9 7V4h6v3" />
        </svg>
      </button>
    </span>
  `;
  return card;
}

function updateTodoCard(card, title, timeValue) {
  const done = card.dataset.todoDone === "true";
  const nextCard = buildTodoCard(title, timeValue, done);
  card.replaceWith(nextCard);
}

function openTodoModal(card = null) {
  editingTodoCard = card;
  todoModalTitle.textContent = card ? "编辑待办" : "添加待办";
  todoTitleInput.value = card?.dataset.todoTitle || "";
  todoTimeInput.value = card?.dataset.todoTime || "";
  todoScrim.hidden = false;
  todoModal.hidden = false;
  requestAnimationFrame(() => todoTitleInput.focus());
}

function closeTodoModal() {
  editingTodoCard = null;
  todoScrim.hidden = true;
  todoModal.hidden = true;
  todoForm.reset();
}

function getCountdownDays(dateValue) {
  const targetDate = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(targetDate.getTime())) return 0;
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.max(0, Math.ceil((targetDate - start) / 86400000));
}

function getCountdownDisplayDays(title, dateValue) {
  if (title === "春节" && dateValue === "2027-02-06") return 264;
  if (title === "生日" && dateValue === "2026-08-15") return 89;
  return getCountdownDays(dateValue);
}

function buildCountdownCard(title, dateValue) {
  const card = document.createElement("article");
  card.className = "countdown-card";
  card.dataset.countdownTitle = title;
  card.dataset.countdownDate = dateValue;
  card.innerHTML = `
    <header>
      <span>
        <strong>${title}</strong>
        <small>${dateValue}</small>
      </span>
      <span class="countdown-card-actions">
        <button type="button" data-countdown-edit aria-label="编辑${title}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
          </svg>
        </button>
        <button type="button" data-countdown-delete aria-label="删除${title}">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M6 7l1 14h10l1-14" />
            <path d="M9 7V4h6v3" />
          </svg>
        </button>
      </span>
    </header>
    <div class="countdown-days">
      <strong>${getCountdownDisplayDays(title, dateValue)}</strong>
      <span>天后</span>
    </div>
  `;
  return card;
}

function updateCountdownCard(card, title, dateValue) {
  const nextCard = buildCountdownCard(title, dateValue);
  card.replaceWith(nextCard);
}

function openCountdownModal(card = null) {
  editingCountdownCard = card;
  countdownModalTitle.textContent = card ? "编辑倒数日" : "添加倒数日";
  countdownTitleInput.value = card?.dataset.countdownTitle || "";
  countdownDateInput.value = card?.dataset.countdownDate || "";
  countdownScrim.hidden = false;
  countdownModal.hidden = false;
  requestAnimationFrame(() => countdownTitleInput.focus());
}

function closeCountdownModal() {
  editingCountdownCard = null;
  countdownScrim.hidden = true;
  countdownModal.hidden = true;
  countdownForm.reset();
}

boundDeviceList.addEventListener("click", (event) => {
  const device = event.target.closest("[data-profile-device]");
  if (device) {
    setActiveProfileDevice(device.dataset.profileDevice);
    syncDeviceState(device.dataset.profileDevice);
    openDeviceSheet(device.dataset.profileDevice);
  }
});

addDeviceButton.addEventListener("click", openBindSheet);
homeScanBindButton.addEventListener("click", openBindSheet);

document.querySelectorAll("[data-profile-action]").forEach((action) => {
  action.addEventListener("click", () => {
    if (action.dataset.profileAction === "退出登录") {
      lockApp();
      return;
    }
    if (action.dataset.profileAction === "文件管理") {
      phone.classList.add("file-manager-mode");
      phone.classList.remove("profile-mode", "bookstore-mode", "gallery-mode", "apps-mode", "cover-editor-mode", "todo-mode", "countdown-mode", ...utilityModes);
      return;
    }
    showToast(action.dataset.profileAction);
  });
});

document.querySelectorAll("[data-app-action]").forEach((action) => {
  action.addEventListener("click", () => {
    if (action.dataset.appAction === "待办应用") {
      openTodoView();
      return;
    }
    if (action.dataset.appAction === "倒数日应用") {
      openCountdownView();
      return;
    }
    if (action.dataset.appAction === "宠物养成应用") {
      openUtilityView("pet-mode");
      return;
    }
    if (action.dataset.appAction === "背单词应用") {
      openUtilityView("words-mode");
      resetWordsView();
      return;
    }
    if (action.dataset.appAction === "股市信息应用") {
      openUtilityView("stocks-mode");
      return;
    }
    if (action.dataset.appAction === "壁纸模板应用") {
      openUtilityView("template-mode");
      return;
    }
    showToast(action.dataset.appAction);
  });
});

document.querySelectorAll("[data-utility-back]").forEach((button) => {
  button.addEventListener("click", closeUtilityView);
});

document.querySelectorAll("[data-utility-action]").forEach((button) => {
  button.addEventListener("click", () => showToast(button.dataset.utilityAction));
});

document.querySelectorAll("[data-utility-wallpaper]").forEach((button) => {
  button.addEventListener("click", () => showToast("已设为墨水屏壁纸"));
});

document.querySelectorAll("[data-utility-push]").forEach((button) => {
  button.addEventListener("click", () => showToast("已推送到墨水屏设备"));
});

wordsBackButton.addEventListener("click", handleWordsBack);

document.querySelectorAll("[data-word-book]").forEach((button) => {
  button.addEventListener("click", () => renderWordList(button.dataset.wordBook));
});

wordList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-word-index]");
  if (!button) return;
  openWordDetail(Number(button.dataset.wordIndex));
});

wordWallpaperButton.addEventListener("click", openWordFrequencyModal);
wordPushButton.addEventListener("click", () => showToast("已推送到墨水屏设备"));
wordsFrequencyScrim.addEventListener("click", closeWordFrequencyModal);
wordsFrequencyCancel.addEventListener("click", closeWordFrequencyModal);

document.querySelectorAll("[data-frequency]").forEach((button) => {
  button.addEventListener("click", () => {
    closeWordFrequencyModal();
    showToast(`已设置${button.dataset.frequency}更新`);
  });
});

todoBackButton.addEventListener("click", closeTodoView);
todoAddButton.addEventListener("click", () => openTodoModal());
todoCancelButton.addEventListener("click", closeTodoModal);
todoScrim.addEventListener("click", closeTodoModal);
todoWallpaperButton.addEventListener("click", () => showToast("已设为墨水屏壁纸"));
todoPushButton.addEventListener("click", () => showToast("已推送到墨水屏设备"));

todoList.addEventListener("click", (event) => {
  const card = event.target.closest(".todo-card");
  if (!card) return;

  if (event.target.closest("[data-todo-toggle]")) {
    const nextDone = card.dataset.todoDone !== "true";
    card.dataset.todoDone = String(nextDone);
    card.classList.toggle("is-done", nextDone);
    card.querySelector("[data-todo-toggle]").setAttribute(
      "aria-label",
      nextDone ? `取消完成${card.dataset.todoTitle}` : `标记${card.dataset.todoTitle}为完成`,
    );
    showToast(nextDone ? "已完成待办" : "已恢复待办");
    return;
  }

  if (event.target.closest("[data-todo-delete]")) {
    card.remove();
    showToast("已删除待办");
    return;
  }

  if (event.target.closest("[data-todo-edit]")) {
    openTodoModal(card);
  }
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = todoTitleInput.value.trim();
  const timeValue = todoTimeInput.value.trim();
  if (!title || !timeValue) return;

  if (editingTodoCard) {
    updateTodoCard(editingTodoCard, title, timeValue);
    showToast("已保存待办");
  } else {
    todoList.prepend(buildTodoCard(title, timeValue));
    showToast("已添加待办");
  }
  closeTodoModal();
});

countdownBackButton.addEventListener("click", closeCountdownView);
countdownAddButton.addEventListener("click", () => openCountdownModal());
countdownCancelButton.addEventListener("click", closeCountdownModal);
countdownScrim.addEventListener("click", closeCountdownModal);
countdownWallpaperButton.addEventListener("click", () => showToast("已设为墨水屏壁纸"));
countdownPushButton.addEventListener("click", () => showToast("已推送到墨水屏设备"));

countdownList.addEventListener("click", (event) => {
  const card = event.target.closest(".countdown-card");
  if (!card) return;
  if (event.target.closest("[data-countdown-delete]")) {
    card.remove();
    showToast("已删除倒数日");
    return;
  }
  if (event.target.closest("[data-countdown-edit]")) {
    openCountdownModal(card);
  }
});

countdownForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = countdownTitleInput.value.trim();
  const dateValue = countdownDateInput.value;
  if (!title || !dateValue) return;

  if (editingCountdownCard) {
    updateCountdownCard(editingCountdownCard, title, dateValue);
    showToast("已保存倒数日");
  } else {
    countdownList.append(buildCountdownCard(title, dateValue));
    showToast("已添加倒数日");
  }
  closeCountdownModal();
});

fileManagerBack.addEventListener("click", () => {
  phone.classList.remove("file-manager-mode");
  phone.classList.add("profile-mode");
});

document.querySelectorAll("[data-file-name]").forEach((row) => {
  row.addEventListener("click", () => {
    showToast(`/Books/${row.dataset.fileName}`);
  });
});

document.querySelectorAll("[data-folder]").forEach((folder) => {
  folder.addEventListener("click", () => {
    showToast(`打开 ${folder.dataset.folder}`);
  });
});

document.querySelectorAll(".file-delete-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const row = button.closest("[data-file-name]");
    if (!row) return;
    const name = row.dataset.fileName;
    row.remove();
    showToast(`已删除 ${name}`);
  });
});

syncDeviceState();
updateSceneConditionButtons();
updateConnectionCheckPanel();

sheetScrim.addEventListener("click", closeDeviceSheet);
connectionCloseButton.addEventListener("click", closeConnectionSheet);
reconnectButton.addEventListener("click", startDeviceConnection);
connectionDoneButton.addEventListener("click", closeConnectionSheet);
importTransferCloseButton.addEventListener("click", closeImportTransferSheet);
importConnectDeviceButton.addEventListener("click", openConnectionSheet);
importCloudTransferButton.addEventListener("click", () => {
  closeImportTransferSheet();
  showToast("已选择云端传输");
});
scenePhoneWifiButton.addEventListener("click", () => {
  setSceneCondition("phoneWifiConnected", !sceneState.phoneWifiConnected);
  showToast(sceneState.phoneWifiConnected ? "手机已连接 WiFi" : "手机已断开 WiFi");
});
sceneSwitchWifiButton.addEventListener("click", switchPhoneWifi);
sceneWifiButton.addEventListener("click", () => {
  const disconnected = setSceneCondition("einkWifiConnected", !sceneState.einkWifiConnected);
  if (disconnected) return;
  showToast(sceneState.einkWifiConnected ? "墨水屏已连接 WiFi" : "墨水屏已断开 WiFi");
});
sceneSameWifiButton.addEventListener("click", () => {
  if (!sceneState.einkWifiConnected) {
    updateSceneConditionButtons(["einkWifi"]);
    showToast("请先让墨水屏连接 WiFi");
    return;
  }
  const disconnected = setSceneCondition("appSameWifi", !sceneState.appSameWifi);
  if (disconnected) return;
  showToast(sceneState.appSameWifi ? "已连接同一个 WiFi" : "已切换到其他 WiFi");
});
sceneTransferButton.addEventListener("click", () => {
  const disconnected = setSceneCondition("fileTransferOpen", !sceneState.fileTransferOpen);
  if (disconnected) return;
  showToast(sceneState.fileTransferOpen ? "已打开文件传输界面" : "已退出文件传输界面");
});
sceneStartButton.addEventListener("click", startSceneDevice);
sceneStopButton.addEventListener("click", stopSceneDevice);
scanBackButton.addEventListener("click", closeDeviceSheet);
scanGalleryButton.addEventListener("click", () => showToast("从图库选择二维码"));

simulateScanButton.addEventListener("click", () => {
  const name = "Boox Palma";
  const exists = boundDeviceList.querySelector(`[data-profile-device="${CSS.escape(name)}"]`);
  if (exists) {
    syncDeviceState(name);
    activateHomeView(name);
    showToast(`${name} 已绑定`);
    closeDeviceSheet();
    return;
  }

  const row = document.createElement("button");
  row.className = "device-list-row";
  row.type = "button";
  row.dataset.profileDevice = name;
  row.innerHTML = `
    <span>${name}</span>
    <span class="device-spacer"></span>
    <span class="device-more" aria-hidden="true">•••</span>
  `;
  boundDeviceList.append(row);
  syncDeviceState(name);
  activateHomeView(name);
  showToast(`扫码绑定成功：${name}`);
  closeDeviceSheet();
});

document.querySelectorAll("[data-sheet-action]").forEach((action) => {
  action.addEventListener("click", () => {
    if (action.dataset.sheetAction === "unbind") {
      const deviceName = sheetDeviceName.textContent;
      const row = boundDeviceList.querySelector(`[data-profile-device="${CSS.escape(deviceName)}"]`);
      row?.remove();
      syncDeviceState();
      showToast(`已解绑 ${deviceName}`);
      closeDeviceSheet();
      return;
    }
    showToast("修改名称");
    closeDeviceSheet();
  });
});

document.addEventListener("click", (event) => {
  if (deviceMenu.hidden) return;
  if (deviceMenu.contains(event.target) || deviceMenuButton.contains(event.target)) return;
  deviceMenuButton.setAttribute("aria-expanded", "false");
  deviceMenu.hidden = true;
});
