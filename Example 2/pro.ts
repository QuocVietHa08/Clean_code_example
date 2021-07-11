interface dateDetail {
  idOfPersonGoWith: string;
  starTime: string;
  endTime: string;
  clothe?: {
    kindOfShirt: string;
    kindOfPant: string;
  };
}

interface personDetail {
  userId: string;
  dateInformation: dateDetail;
}

const checkTheDateDetail2 = ({ userId, dateInformation }: personDetail) => {
  const checkTheDate = new Date() == new Date(dateInformation.starTime);
  const checkThePerson = userId == dateInformation.idOfPersonGoWith;
  const checkThatPersonCloth =
    !!dateInformation.clothe && dateInformation.clothe.kindOfPant;

  checkTheDate && checkThePerson && checkThatPersonCloth ? true : false;
};
