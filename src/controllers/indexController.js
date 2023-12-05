import config from "../config.js";

export const getIndex = (req, res) => {
  res.json({
    name: config.APP_NAME,
    version: config.APP_VERSION,
    description: config.APP_DESCRIPTION,
    author: config.APP_AUTHOR,
    "mail support": config.APP_AUTHOR_EMAIL,
    url: config.APP_URL,
  });
};

export const getIndexApi = (req, res) => {
  res.json({
    "Version Actual": config.API_VERSION,
    Versiones: [
      {
        "Version 1": {
          url: `${config.API_URL}/api/v1`,
          description: "Version 1 de la API",
        },
      },
    ],
  });
};

export const getIndexApiVersion = (req, res) => {
  res.json({
    name: config.APP_NAME,
    version: config.APP_VERSION,
    description: config.APP_DESCRIPTION,
    author: config.APP_AUTHOR,
    "mail support": config.APP_AUTHOR_EMAIL,
    url: config.APP_URL,
  });
};
