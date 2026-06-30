ALTER TABLE matches ADD COLUMN penalty1 INTEGER;
ALTER TABLE matches ADD COLUMN penalty2 INTEGER;

-- Atualizando os jogos que foram pros pênaltis para o placar correto do tempo normal (1x1) 
-- e adicionando os pênaltis
UPDATE matches 
SET score1 = 1, score2 = 1, penalty1 = 3, penalty2 = 4 
WHERE id = 'J1'; -- Alemanha (3) x (4) Paraguai

UPDATE matches 
SET score1 = 1, score2 = 1, penalty1 = 2, penalty2 = 3 
WHERE id = 'J4'; -- Países Baixos (2) x (3) Marrocos

-- ==========================================
-- BÔNUS: TRIGGER PARA AVANÇAR OS TIMES AUTOMATICAMENTE
-- ==========================================
-- Essa função vai rodar sempre que uma partida for marcada como 'FINISHED'
-- Ela descobre quem ganhou e substitui o 'Venc. JX' pelo nome do país nos próximos jogos!

CREATE OR REPLACE FUNCTION update_knockout_progression()
RETURNS TRIGGER AS $$
DECLARE
  winner_name VARCHAR;
  loser_name VARCHAR;
BEGIN
  -- Apenas quando a partida for dada como terminada e houver um placar válido
  IF NEW.status = 'FINISHED' AND NEW.score1 IS NOT NULL AND NEW.score2 IS NOT NULL THEN
    
    -- Descobrir quem ganhou
    IF NEW.score1 > NEW.score2 THEN
      winner_name := NEW.team1;
      loser_name := NEW.team2;
    ELSIF NEW.score2 > NEW.score1 THEN
      winner_name := NEW.team2;
      loser_name := NEW.team1;
    -- Se empatou, olhar os pênaltis
    ELSIF NEW.score1 = NEW.score2 AND NEW.penalty1 IS NOT NULL AND NEW.penalty2 IS NOT NULL THEN
      IF NEW.penalty1 > NEW.penalty2 THEN
        winner_name := NEW.team1;
        loser_name := NEW.team2;
      ELSIF NEW.penalty2 > NEW.penalty1 THEN
        winner_name := NEW.team2;
        loser_name := NEW.team1;
      END IF;
    END IF;

    -- Se tivermos um vencedor definitivo, atualizar os próximos confrontos
    IF winner_name IS NOT NULL THEN
      -- Atualiza o time 1 do próximo jogo se ele estiver esperando 'Venc. JX'
      UPDATE matches 
      SET team1 = winner_name 
      WHERE team1 = 'Venc. ' || NEW.id;

      -- Atualiza o time 2 do próximo jogo
      UPDATE matches 
      SET team2 = winner_name 
      WHERE team2 = 'Venc. ' || NEW.id;

      -- Atualiza a disputa de terceiro lugar
      UPDATE matches 
      SET team1 = loser_name 
      WHERE team1 = 'Perdedor ' || NEW.id;

      UPDATE matches 
      SET team2 = loser_name 
      WHERE team2 = 'Perdedor ' || NEW.id;
    END IF;

  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- O Trigger que observa a tabela 'matches'
DROP TRIGGER IF EXISTS trigger_update_knockout_progression ON matches;
CREATE TRIGGER trigger_update_knockout_progression
AFTER UPDATE ON matches
FOR EACH ROW
WHEN (NEW.status = 'FINISHED' AND (OLD.status IS DISTINCT FROM 'FINISHED' OR OLD.score1 IS DISTINCT FROM NEW.score1 OR OLD.score2 IS DISTINCT FROM NEW.score2))
EXECUTE FUNCTION update_knockout_progression();
