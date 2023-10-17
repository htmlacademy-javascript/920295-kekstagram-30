const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;
const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const DESCRIPTIONS = [
  'На фото изображен молодой человек с улыбкой на лице, он находится на природе, в окружении зелени и цветов.',
  'Женщина на фото выглядит очень элегантно, она одета в стильный костюм и держит в руках дорогую сумку.',
  'Мужчина на фото сосредоточенно работает за компьютером, на его лице видна усталость, но он продолжает трудиться.',
  'Девушка на фото занимается йогой, она выполняет сложную асану и выглядит очень гибкой и спокойной.',
  'Мальчик на фото играет в футбол, он бежит по полю и радуется каждому забитому голу.',
  'На фото изображен мужчина, который готовит еду в кухне, на его лице видна радость от творческого процесса.',
  'Женщина на фото прогуливается по городской улице, она смотрит на витрины магазинов и наслаждается свободным временем.',
  'На фото изображен молодой парень, который читает книгу в парке, он наслаждается спокойствием и умиротворением.',
  'Девушка на фото занимается бегом, она бежит по дорожке и чувствует прилив энергии и силы.',
  'Мужчина на фото играет на гитаре, он исполняет мелодичную музыку и наслаждается звуками своего инструмента.'];
const NAMES = ['Дмитрий', 'Александр', 'Ильшат', 'Артём','Константин', 'Лера'];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMesasge = () => Array.from(
  {length : getRandomInteger(1,2)},
  () => getRandomArrayElement(COMMENTS_LINES),
).join('');

const createComment = () => ({
  id:generateCommentId(),
  avatar: `img/avtar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMesasge(),
  name:getRandomArrayElement(NAMES),

});

const createPicture = (index) => ({
  id:index,
  url:`photos/${index}.jpg`,
  description:getRandomArrayElement(DESCRIPTIONS),
  likes:getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0,COMMENT_COUNT) },
    createComment,
  ),

});
const getPictures = () => Array.from(
  { length : PICTURE_COUNT},
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

getPictures();
