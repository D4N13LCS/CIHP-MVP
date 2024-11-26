import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px 20px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FilterButton = styled.button`
  background: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #554fb8;
  }
`;

const OptionsContainer = styled.div`
  margin-top: 10px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OptionGroup = styled.div`
  margin-bottom: 15px;
`;

const OptionLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;

  input {
    margin-right: 8px;
  }
`;

const ApplyButton = styled.button`
  background: #6c63ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background: #554fb8;
  }
`;

function Filtro() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <FilterContainer>
      <FilterBar>
        <SearchInput type="text" placeholder="Pesquise por vagas..." />
        <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
          Filtrar
        </FilterButton>
      </FilterBar>

      {isFilterOpen && (
        <OptionsContainer>
          <OptionGroup>
            <strong>Tempo:</strong>
            {["Últimas 24h", "Últimos 7 dias", "Últimos 15 dias", "Último mês"].map((option) => (
              <OptionLabel key={option}>
                <input type="radio" name="time" value={option} />
                {option}
              </OptionLabel>
            ))}
          </OptionGroup>

          <OptionGroup>
            <strong>Lugar:</strong>
            {["São José", "Inoã", "Itaipuaçu", "Bambuí"].map((option) => (
              <OptionLabel key={option}>
                <input type="radio" name="place" value={option} />
                {option}
              </OptionLabel>
            ))}
          </OptionGroup>

          <OptionGroup>
            <strong>Causas:</strong>
            {["Meio ambiente", "Proteção animal", "Equidade racial", "Violência contra mulher"].map(
              (option) => (
                <OptionLabel key={option}>
                  <input type="radio" name="cause" value={option} />
                  {option}
                </OptionLabel>
              )
            )}
          </OptionGroup>

          <ApplyButton onClick={() => setIsFilterOpen(false)}>Aplicar Filtros</ApplyButton>
        </OptionsContainer>
      )}
    </FilterContainer>
  );
};

export default Filtro;
