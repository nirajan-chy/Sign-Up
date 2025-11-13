// for sending file

import multer from "multer";

let limits = {
  fileSize: 1024 * 1024 * 5,
};
let storage = multer.diskStorage({
  destination: (req, file, cd) => {
    let staticFolder = "../../public/";
    cb(null, staticFolder);
  },
  filename: (req, file, cb) => {
    let filename = Date.now() + file.originalname;
    cb(null, filename);
  },
});
let fileFilter = (req, file, cb) => {
  let validExtension = [
    ".pdf",
    ".doc",
    ".docx",
    ".png",
    ".PNG",
    ".JPG",
    ".jpg",
    ".jpeg",
    ".JPEG",
  ];
  let originalName = file.originalname;
  let originalExtention = path.extname(originalName);
  let isValidExtension = validExtensions.includes(originalExtention);

  if (isValidExtension) {
    cb(null, true);
  } else {
    cb(new Error("File is not supported "), false);
  }
};

const upload = multer({
  storage: storage,

  fileFilter: fileFilter,

  limits: limits,
});

export default upload;
