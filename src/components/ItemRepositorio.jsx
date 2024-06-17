import Style from '../components/ItemRepositorio.module.css';

function ItemRepositorio({ repo, handleRemoveRepo }) {
    const handleRemove = (e) => {
        e.stopPropagation();  
        handleRemoveRepo(repo.id);
    };

    return (
        <div className={Style.item}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className={Style.verRepositorio}>
                Ver Repositório
            </a>
            <a href="#" onClick={handleRemove} className={Style.remover}>Remover</a>
            <div className={Style.separador}></div>
        </div>
    );
}

export default ItemRepositorio;
