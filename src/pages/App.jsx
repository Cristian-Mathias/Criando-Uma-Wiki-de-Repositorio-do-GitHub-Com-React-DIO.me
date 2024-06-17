import './App.css';
import Input from '../components/Input';
import Logo from '../components/Logo';
import ItemRepositorio from '../components/ItemRepositorio';
import Button from '../components/Button';
import { api } from '../services/api';

import { useState } from 'react';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert('Repositório já existe ou não encontrado');
    } catch (error) {
      alert('Erro ao buscar repositório');
    }
  };

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    setRepos(prev => prev.filter(repo => repo.id !== id));
  };

  return (
    <>
      <div>
        <Logo />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repos.map(repo => (
          <ItemRepositorio key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default App;
