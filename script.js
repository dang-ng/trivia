document.addEventListener('DOMContentLoaded', function () {

                // right answer ****************************
                let right = document.querySelector(".right");
                right.addEventListener('click', function () {
                    right.style.backgroundColor = 'green';
                    document.querySelector('#feedback1').innerHTML = 'correct!';
                });

                // wrong answers ***************************
                let wrong = document.querySelectorAll('.wrong');
                for (let i = 0; i < wrong.length; i++) {
                    wrong[i].addEventListener('click', function () {
                        wrong[i].style.backgroundColor = 'red';
                        document.querySelector('#feedback1').innerHTML = 'incorrect!';
                    })
                };

                document.querySelector('.free').addEventListener('click', function () {
                    let input = document.querySelector('input');
                    if (input.value == 'russia') {
                        input.style.backgroundColor = 'green';
                        document.querySelector('#feedback2').innerHTML = 'correct!';
                    }
                    else {
                        input.style.backgroundColor = 'red';
                        document.querySelector('#feedback2').innerHTML = 'incorrect!';
                    }
                });
            });