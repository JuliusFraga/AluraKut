import MainGrid from './src/componentes/MainGrid'
import Box from './src/componentes/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from './src/lib/AlurakutCommons'
import {ProfileRelationsBoxWrapper} from './src/componentes/ProfileRelations'

function ProfileSideBar(propriedades){
  return (
    <Box>
      <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}></img>      
    </Box>
  )
}

export default function Home() {
  const githubUser = 'JuliusFraga';
  const pessoasFavoritas = [
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'juunegreiros',
    'felipefialho'
  ]

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser}></ProfileSideBar>
      </div>
      <div className="welcomeArea" style={{gridarea: 'welcomeArea'}}>
        <Box style={{ gridArea: 'welcomeArea' }}>
          <h1 className="title">Bem Vindo(a)</h1>
          <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h3 className="smalltitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h3>
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
                  return(
                    <li>
                        <a href={`/user/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span>
                    </a>
                    </li>
                  )
            })}
            </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
