const connectButton = document.getElementById("connectButton");
const connectText = document.getElementById("connectText");
const lastSync = document.getElementById("lastSync");
const statusLine = document.getElementById("statusLine");
const toast = document.getElementById("toast");
const rotateDevice = document.getElementById("rotateDevice");
const deviceMenuButton = document.getElementById("deviceMenuButton");
const deviceMenu = document.getElementById("deviceMenu");
const phone = document.querySelector(".phone");
const bookstoreView = document.getElementById("bookstoreView");
const bookSearch = document.getElementById("bookSearch");
const storeEmpty = document.getElementById("storeEmpty");
const galleryView = document.getElementById("galleryView");
const coverBackButton = document.getElementById("coverBackButton");
const coverZoom = document.getElementById("coverZoom");
const coverZoomValue = document.getElementById("coverZoomValue");
const coverOverlay = document.querySelector(".cover-overlay");
const sheetScrim = document.getElementById("sheetScrim");
const deviceSheet = document.getElementById("deviceSheet");
const sheetDeviceName = document.getElementById("sheetDeviceName");
const addDeviceButton = document.getElementById("addDeviceButton");
const bindSheet = document.getElementById("bindSheet");
const boundDeviceList = document.getElementById("boundDeviceList");
const simulateScanButton = document.getElementById("simulateScanButton");
const fileManagerBack = document.getElementById("fileManagerBack");

let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

connectButton.addEventListener("click", () => {
  const connected = connectButton.classList.toggle("is-connected");
  connectButton.setAttribute("aria-pressed", String(connected));
  connectText.textContent = connected ? "已连接" : "未连接";
  lastSync.textContent = connected ? "刚刚连接：可以开始同步" : "上次连接：2 天前";
  statusLine.textContent = connected ? "设备已就绪，选择内容导入。" : "选择一个入口开始同步内容。";
  showToast(connected ? "设备已连接" : "设备已断开");
});

rotateDevice.addEventListener("click", () => {
  rotateDevice.classList.toggle("is-flat");
  showToast("已切换设备展示角度");
});

deviceMenuButton.addEventListener("click", () => {
  const expanded = deviceMenuButton.getAttribute("aria-expanded") === "true";
  deviceMenuButton.setAttribute("aria-expanded", String(!expanded));
  deviceMenu.hidden = expanded;
});

deviceMenu.addEventListener("click", (event) => {
  const button = event.target.closest("[data-device]");
  if (!button) return;
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
    statusLine.textContent = `${action} 已打开，等待选择文件或输入内容。`;
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
    phone.classList.toggle("profile-mode", label === "个人中心");
    phone.classList.remove("cover-editor-mode", "file-manager-mode");
    if (label === "首页") {
      statusLine.textContent = "选择一个入口开始同步内容。";
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

document.querySelectorAll(".gallery-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.galleryTab;
    document.querySelectorAll(".gallery-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".gallery-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === `${target}Panel`);
    });
    showToast(target === "resources" ? "查看资源" : "查看模板");
  });
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
      phone.classList.remove("gallery-mode", "bookstore-mode");
      showToast("打开透明书封");
      return;
    }
    showToast(`打开${template.dataset.template}`);
  });
});

coverBackButton.addEventListener("click", () => {
  phone.classList.remove("cover-editor-mode");
  phone.classList.add("gallery-mode");
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === "图库");
  });
});

coverZoom.addEventListener("input", () => {
  const value = Number(coverZoom.value);
  coverZoomValue.textContent = `${value}%`;
  coverOverlay.style.transform = `rotate(-2deg) scale(${value / 100})`;
});

function openDeviceSheet(deviceName) {
  bindSheet.hidden = true;
  sheetDeviceName.textContent = deviceName;
  sheetScrim.hidden = false;
  deviceSheet.hidden = false;
}

function openBindSheet() {
  deviceSheet.hidden = true;
  sheetScrim.hidden = false;
  bindSheet.hidden = false;
}

function closeDeviceSheet() {
  sheetScrim.hidden = true;
  deviceSheet.hidden = true;
  bindSheet.hidden = true;
}

boundDeviceList.addEventListener("click", (event) => {
  const device = event.target.closest("[data-profile-device]");
  if (device) {
    openDeviceSheet(device.dataset.profileDevice);
  }
});

addDeviceButton.addEventListener("click", openBindSheet);

document.querySelectorAll("[data-profile-action]").forEach((action) => {
  action.addEventListener("click", () => {
    if (action.dataset.profileAction === "文件管理") {
      phone.classList.add("file-manager-mode");
      phone.classList.remove("profile-mode", "bookstore-mode", "gallery-mode", "cover-editor-mode");
      return;
    }
    showToast(action.dataset.profileAction);
  });
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

sheetScrim.addEventListener("click", closeDeviceSheet);

simulateScanButton.addEventListener("click", () => {
  const name = "Boox Palma";
  const exists = boundDeviceList.querySelector(`[data-profile-device="${CSS.escape(name)}"]`);
  if (exists) {
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
  showToast(`扫码绑定成功：${name}`);
  closeDeviceSheet();
});

document.querySelectorAll("[data-sheet-action]").forEach((action) => {
  action.addEventListener("click", () => {
    const actionName = action.dataset.sheetAction === "rename" ? "修改名称" : "解绑设备";
    showToast(actionName);
    closeDeviceSheet();
  });
});

document.addEventListener("click", (event) => {
  if (deviceMenu.hidden) return;
  if (deviceMenu.contains(event.target) || deviceMenuButton.contains(event.target)) return;
  deviceMenuButton.setAttribute("aria-expanded", "false");
  deviceMenu.hidden = true;
});
