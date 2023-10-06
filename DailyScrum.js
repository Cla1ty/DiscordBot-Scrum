import moment from "moment";

const listUser = [
  `Abi`,
  `Dian`,
  `Dwi`,
  `Gika`,
  `Ifa`,
  `Hamid`,
  `Dhoni`,
  `Felix`,
  `Alfi`,
  `Safira`,
];

const leadUser = {
  date: `10-02-2023`,
  user: `Abi`,
};

const dayOff = [`24-12-2023`];

function getLeadDaily(date) {
  let countDate = 0;
  let currentDate = moment(leadUser.date);
  let targetDate = moment(date);

  if (
    dayOff.includes(targetDate.format("MM-DD-YYYY")) ||
    [6, 0].includes(targetDate.day())
  ) {
    return `Hari Libur`;
  }

  while (currentDate.format("MM-DD-YYYY") !== targetDate.format("MM-DD-YYYY")) {
    currentDate = currentDate.add(1, "days");
    if (dayOff.includes(currentDate.format("MM-DD-YYYY"))) continue;
    if ([6, 0].includes(currentDate.day())) continue;
    countDate++;
  }

  let userIndex = listUser.findIndex((user) => user === leadUser.user);
  let userLeadIndex = (userIndex + countDate) % listUser.length;

  return listUser[userLeadIndex];
}

export default {
  getLeadDaily,
};
