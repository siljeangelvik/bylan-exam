const form = document.getElementById('form');
const name = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const comment = document.getElementById('comment');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
};

const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

const isValidEmail = email => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();


    if (nameValue === '') {
        setError(name, 'Name is required');
    } else if (nameValue.length < 5) {
        setError(name, 'Name has to be at least 5 characters');
    } else {
        setSuccess(name);
    }

    if (subjectValue === '') {
        setError(subject, 'Please provide subject');
    } else if (subjectValue.length < 15) {
        setError(subject, 'Subject has to be at least 15 characters');
    } else {
        setSuccess(subject);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (commentValue === '') {
        setError(comment, 'Comment is required');
    } else if (commentValue.length < 25) {
        setError(comment, 'Comment has to be at least 25 characters');
    } else {
        setSuccess(comment);
    }

   /* if (name.value !== '' && nameValue.length >= 5 &&
        email.value !== '' && emailValue.value === true &&
        subject.value !== '' && subjectValue.length >= 15 &&
        comment.value !== '' && commentValue.length >= 25) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('hideTitle').style.display = 'none';
        document.getElementById('hideText').style.display = 'none';
        document.getElementById('hideForm').style.display = 'none';
    } /**/


    if (document.getElementById('name').value !== '' &&
        document.getElementById('subject').value !== '' &&
        document.getElementById('email').value !== '' &&
        document.getElementById('comment').value !== '') {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('hideTitle').style.display = 'none';
        document.getElementById('hideText').style.display = 'none';
        document.getElementById('hideForm').style.display = 'none';
    } /**/
};