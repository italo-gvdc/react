import styles from './ProjectForm.module.css'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div>
                <input type="text" placeholder="Insira o nome do Projeto" />
            </div> 
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>
                        Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form> 
    )
}

export default ProjectForm
