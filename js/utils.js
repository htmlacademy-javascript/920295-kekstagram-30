const REMOVE_MESSAGE_TIMEOUT = 5000;
const erroeMessageTemplate = document
.querySelector('#data-error')
.content
.querySelector('.data-error');

const showErrorMessage = () => {
const errorElement = erroeMessageTemplate.cloneNode(true);
document.body.append(errorElement);

setTimeout(() => {
  errorElement.remove();
},REMOVE_MESSAGE_TIMEOUT);
};

export { showErrorMessage };
