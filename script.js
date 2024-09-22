document.addEventListener('DOMContentLoaded', () => {
    const examSubjects = document.querySelectorAll('#examSubjects li');
    const nonExamSubjects = document.querySelectorAll('#nonExamSubjects li');

    function toggleCheck(event) {
        event.target.classList.toggle('checked');
    }

    examSubjects.forEach(subject => {
        subject.addEventListener('click', toggleCheck);
    });

    nonExamSubjects.forEach(subject => {
        subject.addEventListener('click', toggleCheck);
    });
});
