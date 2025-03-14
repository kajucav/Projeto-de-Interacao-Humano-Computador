document.addEventListener('DOMContentLoaded', () => {
    const faqData = [
        {
            pergunta: "Como resetar minha senha?",
            resposta: "Acesse a página de recuperação de senha e siga as instruções."
        },
        {
            pergunta: "Quais formas de pagamento?",
            resposta: "Aceitamos cartões, Pix e boleto."
        },
        {
            pergunta: "Prazo de devolução?",
            resposta: "30 dias após recebimento do produto."
        },
        {
            pergunta: "Atualizar dados cadastrais?",
            resposta: "Acesse 'Minha Conta' > 'Editar Perfil'."
        },
        {
            pergunta: "Possuem lojas físicas?",
            resposta: "Atualmente somente vendas online."
        }
    ];

    const faqList = document.getElementById('faq-list');

    faqData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `
            <button class="faq-question">
                ${item.pergunta}
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
                <p>${item.resposta}</p>
            </div>
        `;
        faqList.appendChild(div);
    });

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.parentElement;
            const isActive = parent.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });
});