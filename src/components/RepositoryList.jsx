const RepositoryName = 'uniform2'

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositório</h1>
            <ul>
                <li><strong>{RepositoryName}</strong>
                <p>Form in React</p>
                
                <a href="">
                    Acessar repositório
                </a>
                </li>
                
                <li><strong>{RepositoryName}</strong>
                <p>Form in React</p>
                
                <a href="">
                    Acessar repositório
                </a>
                </li>

                <li><strong>{RepositoryName}</strong>
                <p>Form in React</p>
                
                <a href="">
                    Acessar repositório
                </a>
                </li>
            </ul>
        </section>
    )
}