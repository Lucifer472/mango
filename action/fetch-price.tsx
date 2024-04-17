"use server";

import { google } from "googleapis";

export const fetchPrice = async () => {
  const price = [220, 200, 200];

  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    credentials: {
      type: "service_account",
      project_id: "blog-website-7ff75",
      private_key_id: "16276f98c54a7ad121b706aa7072f62b42b7b6c7",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCNlmGuK7A4vm6K\nuwRQbvo9nmtrQHWWn20pe34BxAGSyKY4TG9+TrH9gu38+ahyIdVV+dn9GJxagDtL\nvT5M1ROGWFw02NIM3tQ9FNS4aEGOnwFmmJ7JpDnTOSJHXJJ8IRk3b1EYPfpCasGH\nGi4P8vxUIkrkT+793ZAhnFMBi3sClF6LJW3YEcJ3WLumqXjNB6nIgzBgyaxosc3N\nDy6rYwwZwLdGBdDYh/qsvYwGKgRPwmJiM/VlwjvV4s8nTh01tSWAW1rCdj0qdwIa\n3dutw77qSM2CVZZghLqt8zxcL0JR3SCp+JyPOxodceGutqE/nQ/oD+bfSV5UfVSJ\nKvvrEi+NAgMBAAECggEAC/tP5NdZoFOtMxxEbzIVByXi3T6lNMvlBv+mWCvoHi3Q\nsy70uHGcamGsFh5ifNYUIaR1KA/vG1GCsxQes43Miy/rDaXTkLdCqrCal8hq09Ds\n42vC9Dlrk05gcj2JP+vlIGXRLQYBqaEzI2W5xCvB4rTMNan2BZG8YrvB4n2VOVCI\nviITHlrSd44zxeEZcQw9+lZVXQKdEQN7HOXQuttQGw3KpUt3S2LYaWHjJVYZDz/0\n+NSLXmHc5D9GfMzDOfRX57YxALzxDMxHWzg+asr2dENQt1fUtgL6LCkKr0jutDtX\nvc9MDgeKXbi7VUU2KKncSDXdds8PkWbXYAAYlWLWGQKBgQDAhMth/5crD1UVsm6l\nW7zrKA1EajI7YduW8Tisojgk7SHxPecQXVgTrcFoYgZBxv6mwukmfPCi0P0rMg8U\nMIaZZdnbggx5VwiRjdX5ZfVmvf5hCVmTVLMG/ifhK528X7uoVnRvbDYKyYfWaFGx\neIyH5s4dKvxAZP2l2JyxBEpaDwKBgQC8Rkp6m7xgdY3hZ0+hB5n/xvF1RYZziVmr\nn+FTkYU9Gy08Pe/TpOikPTGo5Jz0ySf7Gen05upfaDlumCGVlrIzSlKQ7xU18aaP\n9mKOxsXix30/BXfmtillcK9Aljqm2ZJgjA9Ollg4iTlMFSnJYPWH0SbwK42Jvhbd\nXTdkxk+oowKBgEtcMBj+afhLGi1SGYnVLVCH7xmW0G76UXD2oA7DuWKLCLxcVPTM\n9UtOuuTXakeZU9mHdqjAQ5oYYOHlyI1IqYemnO8WKzfcX9hKQzZLORKs0MS/WjcX\n8rSMDKRR5H72ooi0vwNWwpjaZrgBQelMnQYdzRUR3IiAf+HJtxx753b1AoGAaXIw\nyoSot5l/MivrdDPOs2tX1qduywy1FSNBTs2kwvmSlzfVN0MYLMw9IOuRYKO86ay0\n1L3zrCWybNd1j9NL0OAiaBwPVBwYfm6u+moncIDsC7zjT2rcunynGtRI2yPmEH7B\nH/GiTV/FoHAF7EyKl1uzpDWwWuIE6kwH9z/+Y2MCgYEAoQoi9JAcu5WOLNuCAq7C\naEyOpK7uxpI5cSuJShY3RnU6PwObE5afvqwnaVVDYGyjF1k4r9KFoHPjZyzv1tSO\ncdh81/rMXKmL4tM7PG0iOEegM/0n8AykZla9zdDW+bqMjiFsjXpnIYHhVvnQF5tf\nOP7V6xrzXvyd/I50GPUoaQM=\n-----END PRIVATE KEY-----\n",
      client_email: "google-sheet@blog-website-7ff75.iam.gserviceaccount.com",
      client_id: "101593787662032748280",
      universe_domain: "googleapis.com",
    },
  });

  const sheets = google.sheets({ version: "v4", auth: auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1j-B5XZ6TIM-qRd9bXdyXakpwZUyX3IM0CSX-YcQkl-Q",
      range: "Sheet1!A1:C3", // Specify the range of data to fetch
    });

    const rows = response.data.values;
    if (rows && rows.length) {
      rows.forEach((row) => {
        price[0] = parseInt(row[0]);
        price[1] = parseInt(row[1]);
        price[2] = parseInt(row[2]);
      });
    }

    return price;
  } catch (err) {
    return price;
  }
};
