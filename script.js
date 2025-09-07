// Año dinámico y menú móvil
document.getElementById('year').textContent = new Date().getFullYear();

// Ya no es necesario el código del menú, ya que los botones están siempre visibles.

// Lógica del Modal
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.modal-close');

// Datos de productos
const productData = {
    sponge: {
        title: 'Pan de banano',
        description: 'Un bizcocho artesanal preparado con bananos en su punto justo de madurez, integrados en una masa ligera y equilibrada. Horneado con calma, conserva una textura húmeda y una fragancia cálida que envuelve cada rebanada. Una preparación sencilla, pero con un carácter reconfortante y hogareño.',
        image: 'assets2/66.PNG'
    },
    cheesecake: {
        title: 'Red Velvet',
        description: 'Suave, ligero y de un rojo intenso, el Red Velvet nace de la mezcla equilibrada de cacao, mantequilla y azúcar. Su horneado controlado garantiza una miga esponjosa, mientras que el glaseado de queso crema aporta frescura y contraste. Un pastel refinado, tan atractivo a la vista como al paladar.',
        image: 'assets2/77.PNG'
    },
    cupcake: {
        title: 'Cupcakes',
        description: 'Cada cupcake es una obra en miniatura: una masa suave horneada en moldes delicados, lista para recibir un toque final de crema o glaseado. Ya sea en versiones de banano, vainilla o chocolate, estos bocados combinan estética y sabor en perfecta armonía, pensados para acompañar tanto un momento casual como una ocasión especial.',
        image: 'assets2/99.PNG'
    },
    macaron: {
        title: 'Croissant',
        description: 'Un clásico francés elaborado con masa hojaldrada trabajada a mano y mantequilla de calidad. Su proceso de laminado crea capas finas y aireadas, que tras el horneado ofrecen una corteza crujiente y un corazón tierno. Un pan que combina sencillez con sofisticación en cada bocado.',
        image: 'assets2/15.PNG'
    },
    mousse: {
        title: 'Churros',
        description: 'Elaborados con una masa ligera, los churros se fríen en aceite caliente hasta alcanzar un dorado perfecto. Su interior es esponjoso y su superficie se realza con un delicado baño de azúcar y canela. Servidos recién hechos, evocan tradición y calidez en su forma más simple y delicios.',
        image: 'assets2/16.PNG'
    },
    bento: {
        title: 'Donas',
        description: 'Preparadas a partir de una masa fermentada que reposa para ganar ligereza, las donas se fríen hasta lograr un acabado dorado y aireado. Posteriormente se bañan en glaseados finos de chocolate, vainilla o azúcar, ofreciendo un contraste perfecto entre suavidad y dulzor. Un clásico que nunca pierde su encanto.',
        image: 'assets2/6.png'
    }
};

// Función para abrir el modal
function openModal(productKey) {
    const product = productData[productKey];
    if (product) {
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modalImage.src = product.image;
        modalImage.alt = product.title;
        modal.style.display = 'flex';
    }
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners para los botones de "Detalles"
document.querySelectorAll('.show-details-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productKey = event.target.dataset.product;
        openModal(productKey);
    });
});

// Event listener para el botón de cierre del modal
closeBtn.addEventListener('click', closeModal);

// Event listener para cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }

});
