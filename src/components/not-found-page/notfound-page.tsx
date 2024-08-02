import Header from "../header/header"
import PageContainer from "../layout/page-container"

function NotFoundPage() {
  return (
    <PageContainer>
        <Header />
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-4xl">Página não encontrada!</h1>
        </div>
    </PageContainer>
  )
}

export default NotFoundPage