document.addEventListener('DOMContentLoaded', function(){

    function startAnimAboutSelfFlyElements() {
        const aboutSelfFlyElements = document.querySelectorAll('.about-self .fly-elements__item');

        aboutSelfFlyElements.forEach(function(element){
            element.classList.add('start-anim');
        });
    }

    function startAnimCostFlyElements() {
        const costFlyElements = document.querySelectorAll('.cost .fly-elements__item');

        costFlyElements.forEach(function(element){
            element.classList.add('start-anim');
        });
    }

    startAnimAboutSelfFlyElements();

    window.addEventListener('scroll', function() {
        if (window.scrollY > 1200) {
            startAnimCostFlyElements();            
        }
    });
    
    function checkFlyElementsContent() {
        let viewportWidth = document.documentElement.clientWidth;
        const secondFlyDiv = document.querySelector('.fly-elements__item_divnd');
        
        if (viewportWidth < 1290) {
            secondFlyDiv.textContent = '</>';
        } else {
            secondFlyDiv.textContent = '<div>';
        }

    }

    function checkOrderCallBtn() {
        let viewportWidth = document.documentElement.clientWidth;
        const orderCallBtn = document.querySelector('.header .order__btn');
        
        if (viewportWidth <= 988) {
            orderCallBtn.textContent = '';
        } else {
            orderCallBtn.textContent = 'Заказать звонок';
        }
    }

    checkOrderCallBtn();
    
    window.addEventListener('resize', () => {
        let viewportWidth = document.documentElement.clientWidth;
        const secondFlyDiv = document.querySelector('.fly-elements__item_divnd');
        const orderCallBtn = document.querySelector('.header .order__btn');
        // console.log('secondFlyDiv: ', secondFlyDiv.textContent);
        // console.log('viewportWidth: ', viewportWidth);
    
        if (viewportWidth < 1290) {
            secondFlyDiv.textContent = '</>';
        } else {
            secondFlyDiv.textContent = '<div>';
        }
        
        if (viewportWidth <= 988) {
            orderCallBtn.textContent = '';
        } else {
            orderCallBtn.textContent = 'Заказать звонок';
        }
    
    });

    checkFlyElementsContent();

    const toggleModalForm = () => {
        const modalFormContainer = document.querySelector('.modal-container');
        const modalOverlay = document.querySelector('.modal-overlay');
        const orderCallBtn = document.querySelector('.header .order__btn');
        const footerOrderCallBtn = document.querySelector('.contacts .order__btn');        
        const infoOrderBtn = document.querySelector('.main .about-self__btn');
        const costOrderBtn = document.querySelector('.services__btn');
        const orderBtn = document.querySelector('.portfolio__btn');
        const formCloseBtn = document.querySelectorAll('.form__cross');
        const callOrderForm = document.querySelector('.phone-form');
        const costOrderForm = document.querySelector('.cost-form');
        const infoOrderForm = document.querySelector('.info-form');
        const orderForm = document.querySelector('.order-form');
        const callFormSentContainer = document.querySelector('.phone-form .form__sent-container');
        const costFormSentContainer = document.querySelector('.cost-form .form__sent-container');
        const infoFormSentContainer = document.querySelector('.info-form .form__sent-container');
        const orderFormSentContainer = document.querySelector('.order-form .form__sent-container');
        // const scrollWidth = window.innerWidth - document.body.offsetWidth;

        orderCallBtn.addEventListener('click', () => {
            let scrollTopPosition = window.scrollY;
            modalFormContainer.style.display = 'block';
            callOrderForm.style.display = 'block';            
            setTimeout(() => callOrderForm.classList.add('show'), 100);
            modalFormContainer.style.top = scrollTopPosition + 'px';
            document.body.dataset.topPosition = scrollTopPosition;
            document.body.classList.add('scroll-disable');
            document.body.style.top = -scrollTopPosition + 'px';
            callFormSentContainer.style.display = 'none';  
        });

        footerOrderCallBtn.addEventListener('click', () => {
            let scrollTopPosition = window.scrollY;
            modalFormContainer.style.display = 'block';
            callOrderForm.style.display = 'block';
            setTimeout(() => callOrderForm.classList.add('show'), 100);
            modalFormContainer.style.top = scrollTopPosition + 'px';
            document.body.dataset.topPosition = scrollTopPosition;
            document.body.classList.add('scroll-disable');
            document.body.style.top = -scrollTopPosition + 'px';
            callFormSentContainer.style.display = 'none';  
        });
        

        infoOrderBtn.addEventListener('click', () => {
            let scrollTopPosition = window.scrollY;
            modalFormContainer.style.display = 'block';
            infoOrderForm.style.display = 'block';
            setTimeout(() => infoOrderForm.classList.add('show'), 100);            
            modalFormContainer.style.top = scrollTopPosition + 'px';
            document.body.dataset.topPosition = scrollTopPosition;
            document.body.classList.add('scroll-disable');
            document.body.style.top = -scrollTopPosition + 'px';
            infoFormSentContainer.style.display = 'none';  
        });

        costOrderBtn.addEventListener('click', () => {
            let scrollTopPosition = window.scrollY;
            modalFormContainer.style.display = 'block';
            costOrderForm.style.display = 'block';
            setTimeout(() => costOrderForm.classList.add('show'), 100);
            modalFormContainer.style.top = scrollTopPosition + 'px';
            document.body.dataset.topPosition = scrollTopPosition;
            document.body.classList.add('scroll-disable');
            document.body.style.top = -scrollTopPosition + 'px';
            costFormSentContainer.style.display = 'none';  
        });

        orderBtn.addEventListener('click', () => {
            let scrollTopPosition = window.scrollY;
            modalFormContainer.style.display = 'block';
            orderForm.style.display = 'block';
            setTimeout(() => orderForm.classList.add('show'), 100);
            modalFormContainer.style.top = scrollTopPosition + 'px';
            document.body.dataset.topPosition = scrollTopPosition;
            document.body.classList.add('scroll-disable');
            document.body.style.top = -scrollTopPosition + 'px';
            orderFormSentContainer.style.display = 'none';  
        });

        modalFormContainer.addEventListener('click', function(event) {
            let scrollTopPosition = parseInt(document.body.dataset.topPosition, 10);           

            formCloseBtn.forEach(function(btn) {

                if (event.target === modalOverlay || event.target === btn) {
                    document.body.style.top = 'auto';
                    document.body.classList.remove('scroll-disable');
                    modalFormContainer.style.display = 'none';
                    modalFormContainer.style.top = 0 + 'px';
                    window.scroll({top: scrollTopPosition, left: 0});
                    document.body.removeAttribute('data-top-position');
                    callOrderForm.style.display = 'none';
                    costOrderForm.style.display = 'none';
                    infoOrderForm.style.display = 'none';
                    orderForm.style.display = 'none';
                    orderForm.classList.remove('show');
                    costOrderForm.classList.remove('show');
                    infoOrderForm.classList.remove('show');
                    callOrderForm.classList.remove('show');
                }
                
            });
        });
    }

    let selector = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    new window.JustValidate('.phone-form', {
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            name: {
                required: ''
            },
            tel: {
                required: ''
            }
        },
        submitHandler: function(form, values, ajax) {
            const callFormSentContainer = document.querySelector('.phone-form .form__sent-container');
            
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
                callFormSentContainer.style.display = 'block';
            });

        }
    });

    new window.JustValidate('.cost-form', {
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Введите ваше имя'
            },
            tel: {
                required: 'Введите ваш номер телефона'
            }
        },
        submitHandler: function(form, values, ajax) {
            const costFormSentContainer = document.querySelector('.cost-form .form__sent-container');
            
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
                costFormSentContainer.style.display = 'block';
            });

        }
    });

    new window.JustValidate('.info-form', {
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            name: {
                required: 'Введите ваше имя'
            },
            tel: {
                required: 'Введите ваш номер телефона'
            },
            email: {
                required: 'Введите ваш E-mail'
            }
        },
        submitHandler: function(form, values, ajax) {
            const infoFormSentContainer = document.querySelector('.info-form .form__sent-container');
            
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
                infoFormSentContainer.style.display = 'block';
            });

        }
    });

    new window.JustValidate('.order-form', {
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            name: {
                required: 'Введите ваше имя'
            },
            tel: {
                required: 'Введите ваш номер телефона'
            },
            email: {
                required: 'Введите ваш E-mail'
            }
        },
        submitHandler: function(form, values, ajax) {
            const orderFormSentContainer = document.querySelector('.order-form .form__sent-container');
            
            let formData = new FormData(form);

            fetch('mail.php', {
                method: 'POST',
                body: formData
            })
            .then(function(data) {
                console.log(data);
                console.log('Отправлено');
                form.reset();
                orderFormSentContainer.style.display = 'block';
            });

        }
    });

    toggleModalForm();

});