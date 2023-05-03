const puppeteer = require("puppeteer");

// const _date = "01-05-2023";
// const min = 119;
// const max = 2;

const AWCs = [
  { value: "456578", title: "02 Gurja" },
  { value: "456584", title: "07 Sunwai-C" },
  { value: "456573", title: "11-C Iklod" },
  { value: "456657", title: "13 Kuthar" },
  { value: "456639", title: "14 Milawali" },
  { value: "456646", title: "14 Sukhwas" },
  { value: "456572", title: "17 Bakhatpura" },
  { value: "456660", title: "Aanandpura" },
  { value: "456650", title: "Akoriya" },
  { value: "456665", title: "Amli Ka Sahrana" },
  { value: "456581", title: "Andhupura" },
  { value: "456591", title: "Anida" },
  { value: "456652", title: "Arrodai" },
  { value: "456571", title: "Arustha" },
  { value: "456672", title: "Bada. Upcha" },
  { value: "456602", title: "Badagaaw" },
  { value: "456607", title: "Badapura" },
  { value: "456661", title: "Baddan Ka Pura" },
  { value: "456656", title: "Badi Was Ka Sehrana" },
  { value: "456564", title: "Bagcha" },
  { value: "456640", title: "Balawani" },
  { value: "456669", title: "Bangrod -C" },
  { value: "456670", title: "Bangrod-A" },
  { value: "456671", title: "Bangrod-B" },
  { value: "456649", title: "Bankhara" },
  { value: "456692", title: "Barauli" },
  { value: "456585", title: "Bardula" },
  { value: "456708", title: "Bari Ka Har" },
  { value: "456552", title: "Basna Sehrana" },
  { value: "456619", title: "Bathere" },
  { value: "456673", title: "Bhaisai" },
  { value: "456696", title: "Bhampura" },
  { value: "456680", title: "Bharkhoh" },
  { value: "456543", title: "Bheropura" },
  { value: "456628", title: "Bheropura Veerpur" },
  { value: "456690", title: "Bhojpadiya" },
  { value: "456648", title: "Bhuredi" },
  { value: "456575", title: "Bichpuri" },
  { value: "456609", title: "Brahman Mohalla Wirpur" },
  { value: "456658", title: "Budhdaram Ka Dera" },
  { value: "456548", title: "Chainpur" },
  { value: "456627", title: "Chak Chand Khan" },
  { value: "456614", title: "Chaksitaram" },
  { value: "456654", title: "Chandupura" },
  { value: "456603", title: "Chehri Ka Pura" },
  { value: "456554", title: "Chhawar" },
  { value: "456679", title: "Chhota Upcha" },
  { value: "456662", title: "Danglipura" },
  { value: "456645", title: "Danteti" },
  { value: "456535", title: "Daulpura" },
  { value: "456691", title: "Dhakad Basti Garhi" },
  { value: "456563", title: "Dhamloki" },
  { value: "456712", title: "Dhobipura" },
  { value: "456702", title: "Dhokri Ka Sahrana" },
  { value: "456537", title: "Dhori Bawdi" },
  { value: "456553", title: "Dhoriba Bawabdi Mini" },
  { value: "456617", title: "Dimraksha" },
  { value: "456559", title: "Dokarka" },
  { value: "456590", title: "Dongarpur" },
  { value: "456577", title: "Dord-A" },
  { value: "456576", title: "Dord-B" },
  { value: "456574", title: "Dord-C" },
  { value: "456547", title: "Duaawali" },
  { value: "456579", title: "Eklod-E" },
  { value: "456549", title: "Fulpura" },
  { value: "456681", title: "Gadhi-B" },
  { value: "456683", title: "Gadhi-C" },
  { value: "456674", title: "Gdhi-A" },
  { value: "456635", title: "Ghana Chacha" },
  { value: "456610", title: "Ghunghs" },
  { value: "456605", title: "Gohar" },
  { value: "456586", title: "Gohra-A" },
  { value: "456587", title: "Gohra-B" },
  { value: "456637", title: "Gole Ka Sahrana" },
  { value: "456569", title: "Golipura" },
  { value: "456570", title: "Golipura Sahrana" },
  { value: "456721", title: "Gondauliya Pura" },
  { value: "456634", title: "Hakuram Ka Dera" },
  { value: "456556", title: "Hanuman Dada" },
  { value: "456567", title: "Hardolpura" },
  { value: "456623", title: "Harijan Basti Badgaaw" },
  { value: "456588", title: "Harijan Basti Bichipuri" },
  { value: "456622", title: "Harijan Basti Nitanbas" },
  { value: "456550", title: "Harijan Basti Shyampur" },
  { value: "456599", title: "Harkui" },
  { value: "456636", title: "Hasilpur" },
  { value: "456643", title: "Hindoliya Ka Sahrana" },
  { value: "456698", title: "Hirapura" },
  { value: "456687", title: "Hrisingh Ka Pura" },
  { value: "456568", title: "Iklod E" },
  { value: "456580", title: "Iklod-B" },
  { value: "456565", title: "Iklod-D" },
  { value: "456555", title: "Imartapura" },
  { value: "456677", title: "Itwai" },
  { value: "456534", title: "Jahangadh" },
  { value: "456608", title: "Jakher" },
  { value: "456694", title: "Jamurdi" },
  { value: "456711", title: "Jatab Basti Hirapura" },
  { value: "456583", title: "Jataw Mohalla Sunwai-B" },
  { value: "456566", title: "Jharabdauda" },
  { value: "456707", title: "Jiwan Nagar" },
  { value: "456678", title: "Joma Ka Pura" },
  { value: "456709", title: "Katannipura" },
  { value: "456557", title: "Kaupura" },
  { value: "456632", title: "Kemkahar" },
  { value: "456664", title: "Khadi No 2 Sahrana" },
  { value: "456561", title: "Khadii No. 2" },
  { value: "456685", title: "Kharipura" },
  { value: "456638", title: "Kheroda Khurd" },
  { value: "456653", title: "Kherodakala" },
  { value: "456668", title: "Khitarpal, 2" },
  { value: "456686", title: "Khitarpal-A" },
  { value: "456647", title: "Kinpura" },
  { value: "456546", title: "Kishanpura" },
  { value: "456663", title: "Kotbalakpura" },
  { value: "456616", title: "Kotre Ka Pura" },
  { value: "456710", title: "Kumharpura" },
  { value: "456718", title: "Kushwah Basti Jamurdi" },
  { value: "456589", title: "Kushwah Basti Sunwai" },
  { value: "456719", title: "Laxmanpura" },
  { value: "456601", title: "Lildha" },
  { value: "456625", title: "Lildha Mini" },
  { value: "456613", title: "Liluli" },
  { value: "456675", title: "Madha-A  Harijan Basti" },
  { value: "456676", title: "Madha-B Kushwah Basti" },
  { value: "456720", title: "Mahuaamar" },
  { value: "456714", title: "Maide Ki Jhpdi" },
  { value: "456592", title: "Malhapura" },
  { value: "456621", title: "Mata Ka Pura" },
  { value: "456717", title: "Mini Baroli" },
  { value: "456626", title: "Mogiyapura" },
  { value: "456594", title: "Mohanpur" },
  { value: "456562", title: "Moreka" },
  { value: "456624", title: "Mursaypura" },
  { value: "456596", title: "Nadigaaw" },
  { value: "456697", title: "Nimach" },
  { value: "456606", title: "Nitanwas" },
  { value: "456620", title: "Nitnbas Malhapura" },
  { value: "456539", title: "Ochha Jhopdi" },
  { value: "456551", title: "Ochha Ki Jhopdi" },
  { value: "456612", title: "Pacho Kaloni" },
  { value: "456666", title: "Pakode Ka Sahrana" },
  { value: "456618", title: "Panchayapura" },
  { value: "456630", title: "Pancholiyapura" },
  { value: "456701", title: "Paparsil" },
  { value: "456536", title: "Parasta" },
  { value: "456713", title: "Parsuli" },
  { value: "456659", title: "Pili Karar" },
  { value: "456703", title: "Piprani" },
  { value: "456544", title: "Pura-A" },
  { value: "456545", title: "Pura-B" },
  { value: "456704", title: "Raghunathpur-A" },
  { value: "456705", title: "Raghunathpur-B" },
  { value: "456706", title: "Raghunathpur-C" },
  { value: "456715", title: "Ramgware Ka Sahrana" },
  { value: "456558", title: "Ramola Ka Pura" },
  { value: "456688", title: "Rampura" },
  { value: "456684", title: "Ranawad" },
  { value: "456593", title: "Rawat Basti Andhupura" },
  { value: "456582", title: "Rawat Mohalla Sunwai-A" },
  { value: "456700", title: "Rawatpura" },
  { value: "456693", title: "Rijhaita" },
  { value: "456667", title: "Saand" },
  { value: "456716", title: "Samantapura" },
  { value: "456655", title: "Sarshilli" },
  { value: "456598", title: "Sather" },
  { value: "456542", title: "Shyampur-A" },
  { value: "456538", title: "Shyampur-B" },
  { value: "456541", title: "Shyampur-C Wasauna" },
  { value: "456540", title: "Shyampur-D" },
  { value: "456600", title: "Shyarda" },
  { value: "456611", title: "Sikheda" },
  { value: "456560", title: "Sironi" },
  { value: "456642", title: "Sohri Ka Sahrana" },
  { value: "456695", title: "Sumrera" },
  { value: "456699", title: "Sumrera Ki Jhopdi" },
  { value: "456651", title: "Suthara" },
  { value: "456644", title: "Tarrakala" },
  { value: "456631", title: "Tarrakala Sahrana" },
  { value: "456641", title: "Tarrakhurd" },
  { value: "456595", title: "Telipura" },
  { value: "456682", title: "Tilangapura" },
  { value: "456689", title: "Tilgapur Mini" },
  { value: "456629", title: "Veerpur Kendra 4" },
  { value: "456633", title: "Wala Ka Sahrana" },
  { value: "456597", title: "Wirpur-B" },
  { value: "456604", title: "Wirpur-C" },
  { value: "456615", title: "Wirpur-D" },
];
const activity = [
  { value: "2", title: "Recipe competition at AWCs focusing Millets" },
  {
    value: "3",
    title: "Campaign to promote Millets and Backyard Kitchen Gardens",
  },
  {
    value: "4",
    title:
      "Campaign on sensitising Institutions, functionaries and community on benefits of Millets (Bharat Scouts/ Guides/ SHGs may help/facilitate the same)",
  },
  {
    value: "6",
    title:
      "Awareness session for Adolescent girls connecting Millets with their health (Bharat Scouts/ Guides/NYK/NSS)",
  },
  {
    value: "8",
    title:
      "Awareness camp on healthy dietary practices (regional and seasonal) focusing Millets (Bharat Scouts/ Guides/ SHGs may help/facilitate the same)",
  },
  {
    value: "16",
    title:
      "Sensitization session of panchayats on Millets (SHGs may help/facilitate the same)",
  },
  {
    value: "15",
    title:
      "Event on highlighting Millets as Paushtik/Sampoorn Aahaar for all age groups",
  },
  {
    value: "14",
    title: "Home Visits exclusively focusing awareness on Millets",
  },
  {
    value: "17",
    title:
      "Drive on linking Millet-based foods with local festivals (SHGs may help/facilitate the same)",
  },
  {
    value: "18",
    title:
      "Awareness drive on good health through Millets intake in food, in urban slums (Urban SHGs may help/facilitate the same)",
  },
  {
    value: "19",
    title:
      "Sensitization drive and outreach activity on nutrition through Millets in minority dominated areas (SHGs may help/facilitate the same)",
  },
  {
    value: "21",
    title:
      "Millet focused CBEs: Having local experts to narrate the importance of Millets esp. for PW, Ad. Girls, & Children (SHGs may help/facilitate the same)",
  },
  {
    value: "23",
    title:
      "Demonstration drive on Amma ki Rasoi/Grandmothers kitchen based on locally available Millets",
  },
  {
    value: "24",
    title:
      "Event on promoting Tricolour/Rainbow/Traditional thali made up of Millet based food items (SHGs may help/facilitate the same)",
  },
  { value: "86", title: "Others" },
];

// let AWCsIndex = min;
// let activityIndex = 0;

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function scrap(stream, _date, AWCsIndex=0, entriesToBeDone=AWCs.length, activityIndex=0){
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp",
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
  await page.goto("https://poshanabhiyaan.gov.in/addactivityparticipation", {
    waitUntil: "load",
  });

  await page.type("input[name='username']", "mow&cd-2341806");
  await page.type("input[name='password']", "mow&cd-2341806");

  await Promise.all([
    page.waitForNavigation(),
    await page.click("button[type='submit']"),
  ]);

  for (let i = 0; i < entriesToBeDone; i++) {
    for (const activityObj of activity) {
      await page.waitForSelector("select[name='SelectTheme']", {
        visible: true,
      });
      let theme = await page.$("select[name='SelectTheme']");
      await theme.type(
        "Promotion and popularization of Shree Anna/ Millets for nutritional wellbeing"
      );

      await page.waitForSelector("select[name='SelectLevel']", {
        visible: true,
      });
      let level = await page.$("select[name='SelectLevel']");
      await level.type("AWC");

      // 👌😁👌😁👌😁👌😁
      // Inserting Iterative values
      await page.waitForSelector("select[name='awc_center']");
      let awc_center = await page.$("select[name='awc_center']", {
        visible: true,
      });
      await awc_center.select('option[value="456578"]');

      await page.waitForSelector("select[name='SelectActivity']");
      let SelectActivity = await page.$("select[name='SelectActivity']", {
        visible: true,
      });
      await SelectActivity.type(activity[activityIndex].title);
      await awc_center.type(AWCs[AWCsIndex].title);

      let dateFrom = await page.$("input[name='SelectDateFrom']");
      let dateTo = await page.$("input[name='SelectDateTo']");

      await page.evaluate((el) => {
        const dateInput = document.getElementsByName("SelectDateFrom")[0];
        dateInput.addEventListener("keydown", function (event) {
          event.stopPropagation();
        });
        dateInput.setAttribute("min", "");
        dateInput.setAttribute("max", "");
      }, _date);

      await page.evaluate((el) => {
        const dateInput = document.getElementsByName("SelectDateTo")[0];
        dateInput.addEventListener("keydown", function (event) {
          event.stopPropagation();
        });
        dateInput.setAttribute("min", "");
        dateInput.setAttribute("max", "");
        dateInput.removeAttribute("disabled");
        dateInput.removeAttribute("readonly");
      }, _date);

      await dateFrom.type(_date);
      await dateTo.type(_date);

      await page.type(
        "input[name='CountAdultMale']",
        randomInt(7, 14).toString()
      );
      await page.type(
        "input[name='CountAdultFemale']",
        randomInt(7, 14).toString()
      );
      await page.type(
        "input[name='CountChildMale']",
        randomInt(7, 14).toString()
      );
      await page.type(
        "input[name='CountChildFemale']",
        randomInt(7, 14).toString()
      );

      await page.evaluate((el) => {
        const dateInput = document.getElementsByName("SelectDateTo")[0];
        const dateInput1 = document.getElementsByName("SelectDateFrom")[0];
        dateInput.value = el;
        dateInput1.value = el;
      }, _date);

      await page.click("button[type='submit']", {delay:100});
      await page.click("button[type='reset']", {delay:300});

      // let submission_result = await page.$(
      //   "form > div.form-submitted-row > div > div > div > p"
      // );
      // let submission_msg = await page.evaluate(() => {
      //   const msg = document.querySelector("form > div.form-submitted-row > div > div > div > p");
      //   return msg.textContent;
      // });
      // console.log(submission_msg);
      // await waitFor(1000);

      // sending data to frontend
      stream.sendEvent("activity_change", JSON.stringify({"sno":activityIndex,result:1}));
      
      console.log(AWCs[AWCsIndex].title, activityObj.title);
      activityIndex++;
    }
    AWCsIndex++;
    activityIndex = 0;
    stream.sendEvent("AWC_change", JSON.stringify({"sno":AWCsIndex,result:1}));
  }

  console.log("Completed for date ", _date, "successfully");
  await browser.close();
  stream.sendEvent("close", "Connection End");
  stream.end();
}

module.exports = {AWCs, activity, scrap};
